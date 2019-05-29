import React, { Component, Children } from 'react';
import { findDOMNode, createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { func } from '../util';
import findNode from './utils/find-node';

const { makeChain } = func;

// 主要做的事情就是createPortal，创建children（包括浮层、mask）和container node的关联
export default class Gateway extends Component {
    static propTypes = {
        children: PropTypes.node,
        container: PropTypes.any,
        target: PropTypes.any,
    };

    static defaultProps = {
        container: () => document.body,
    };

    componentDidMount() {
        this.containerNode = this.getContainerNode(this.props);
        this.forceUpdate();
    }

    componentWillReceiveProps(nextProps) {
        this.containerNode = this.getContainerNode(nextProps);
    }

    getContainerNode(props) {
        const targetNode = findNode(props.target);
        // 当container是函数时，targetNode会作为参数传给他
        return findNode(props.container, targetNode);
    }

    getChildNode() {
        return findDOMNode(this.child);
    }

    saveChildRef = ref => {
        this.child = ref;
    };

    render() {
        if (!this.containerNode) {
            return null;
        }

        const { children } = this.props;
        let child = children ? Children.only(children) : null;
        if (!child) {
            return null;
        }

        if (typeof child.ref === 'string') {
            throw new Error(
                'Can not set ref by string in Gateway, use function instead.'
            );
        }
        child = React.cloneElement(child, {
            ref: makeChain(this.saveChildRef, child.ref),
        });

        return createPortal(child, this.containerNode);
    }
}
