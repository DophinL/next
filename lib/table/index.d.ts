/// <reference types="react" />

import * as React from "react";

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
  title?: any;
}

export interface ColumnProps extends HTMLAttributesWeak {
  /**
   * 指定列对应的字段，支持`a.b`形式的快速取值
   */
  dataIndex?: string;

  /**
   * 行渲染的逻辑
   * value, rowIndex, record, context四个属性只可读不可被更改
   * Function(value, index, record) => Element
   */
  cell?: React.ReactElement<any> | React.ReactNode | (() => void);

  /**
   * 表头显示的内容
   * value, rowIndex, record, context四个属性只可读不可被更改
   */
  title?: React.ReactElement<any> | React.ReactNode | (() => void);

  /**
   * 是否支持排序
   */
  sortable?: boolean;

  /**
   * 列宽，注意在锁列的情况下一定需要配置宽度
   */
  width?: number | string;

  /**
   * 单元格的对齐方式
   */
  align?: "left" | "center" | "right";

  /**
   * 单元格标题的对齐方式, 不配置默认读取align值
   */
  alignHeader?: "left" | "center" | "right";

  /**
   * 生成标题过滤的菜单, 格式为`[{label:'xxx', value:'xxx'}]`
   */
  filters?: Array<any>;

  /**
   * 过滤的模式是单选还是多选
   */
  filterMode?: "single" | "multiple";

  /**
   * 是否支持锁列,可选值为`left`,`right`, `true`
   */
  lock?: boolean | string;

  /**
   * 是否支持列宽调整, 当该值设为true，table的布局方式会修改为fixed.
   */
  resizable?: boolean;
}

export class Column extends React.Component<ColumnProps, any> {}

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
  title?: any;
}

export interface ColumnGroupProps extends HTMLAttributesWeak {
  /**
   * 表头显示的内容
   */
  title?: React.ReactElement<any> | React.ReactNode | (() => void);
}

export class ColumnGroup extends React.Component<ColumnGroupProps, any> {}

export interface GroupHeaderProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * 行渲染的逻辑
   */
  cell?: React.ReactElement<any> | React.ReactNode | (() => void);

  /**
   * 是否在Children上面渲染selection
   */
  hasChildrenSelection?: boolean;

  /**
   * 是否在GroupHeader上面渲染selection
   */
  hasSelection?: boolean;
}

export class GroupHeader extends React.Component<GroupHeaderProps, any> {}

export interface GroupFooterProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * 行渲染的逻辑
   */
  cell?: React.ReactElement<any> | React.ReactNode | (() => void);
}

export class GroupFooter extends React.Component<GroupFooterProps, any> {}
export interface TableProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * 样式类名的品牌前缀
   */
  prefix?: string;

  /**
   * 自定义类名
   */
  className?: string;

  /**
   * 自定义内联样式
   */
  style?: React.CSSProperties;

  /**
   * 表格展示的数据源
   */
  dataSource?: Array<any>;

  /**
   * 点击表格每一行触发的事件
   */
  onRowClick?: ((record: {}, index: number, e: any) => void);

  /**
   * 悬浮在表格每一行的时候触发的事件
   */
  onRowMouseEnter?: ((record: {}, index: number, e: any) => void);

  /**
   * 离开表格每一行的时候触发的事件
   */
  onRowMouseLeave?: ((record: {}, index: number, e: any) => void);

  /**
   * 点击列排序触发的事件
   */
  onSort?: ((dataIndex: string, order: string) => void);

  /**
   * 点击过滤确认按钮触发的事件
   */
  onFilter?: ((filterParams: {}) => void);

  /**
   * 重设列尺寸的时候触发的事件
   */
  onResizeChange?: ((dataIndex: string, value: number) => void);

  /**
   * 设置每一行的属性，如果返回值和其他针对行操作的属性冲突则无效。
   */
  getRowProps?: ((record: {}, index: number) => {});

  /**
   * 设置单元格的属性，通过该属性可以进行合并单元格
   */
  getCellProps?: ((
    rowIndex: number,
    colIndex: number,
    dataIndex: string,
    record: {}
  ) => {});

  /**
   * 表格是否具有边框
   */
  hasBorder?: boolean;

  /**
   * 表格是否具有头部
   */
  hasHeader?: boolean;

  /**
   * 表格是否是斑马线
   */
  isZebra?: boolean;

  /**
   * 表格是否在加载中
   */
  loading?: boolean;

  /**
   * 自定义 Loading 组件
   */
  loadingComponent?: (() => void);

  /**
   * 当前过滤的的keys,使用此属性可以控制表格的头部的过滤选项中哪个菜单被选中,格式为 {dataIndex: {selectedKeys:[]}}
   * 示例:
   * 假设要控制dataIndex为id的列的过滤菜单中key为one的菜单项选中
   * `<Table filterParams={{id: {selectedKeys: ['one']}}}/>`
   */
  filterParams?: {};

  /**
   * 当前排序的字段,使用此属性可以控制表格的字段的排序,格式为{dataIndex: 'asc'}
   */
  sort?: {};

  /**
   * 自定义国际化文案对象
   */
  locale?: {
    ok: string;
    reset: string;
    empty: string;
    asc: string;
    desc: string;
    expanded: string;
    folded: string;
    filter: string;
    selectAll: string;
  };

  /**
   * 设置数据为空的时候的表格内容展现
   */
  emptyContent?: React.ReactNode;

  /**
   * dataSource当中数据的主键，如果给定的数据源中的属性不包含该主键，会造成选择状态全部选中
   */
  primaryKey?: string;

  /**
   * 额外渲染行的渲染函数
   */
  expandedRowRender?: ((record: {}, index: number) => React.ReactElement<any>);

  /**
   * 额外渲染行的缩进
   */
  expandedRowIndent?: Array<any>;

  /**
   * 默认情况下展开的渲染行或者Tree, 传入此属性为受控状态
   */
  openRowKeys?: Array<any>;

  /**
   * 是否显示点击展开额外渲染行的+号按钮
   */
  hasExpandedRowCtrl?: boolean;

  /**
   * 设置额外渲染行的属性
   */
  getExpandedColProps?: (() => void);

  /**
   * 在额外渲染行或者Tree展开或者收起的时候触发的事件
   */
  onRowOpen?: ((
    openRowKeys: Array<any>,
    currentRowKey: string,
    expanded: boolean,
    currentRecord: {}
  ) => void);

  /**
   * 点击额外渲染行触发的事件
   */
  onExpandedRowClick?: ((record: {}, index: number, e: any) => void);

  /**
   * 表头是否固定，该属性配合maxBodyHeight使用，当内容区域的高度超过maxBodyHeight的时候，在内容区域会出现滚动条
   */
  fixedHeader?: boolean;

  /**
   * 最大内容区域的高度,在`fixedHeader`为`true`的时候,超过这个高度会出现滚动条
   */
  maxBodyHeight?: number | string;

  /**
   * 是否启用选择模式
   */
  rowSelection?: {
    getProps: (() => void);
    onChange: (() => void);
    onSelect: (() => void);
    onSelectAll: (() => void);
    selectedRowKeys: Array<any>;
    mode: string;
  };

  /**
   * 表头是否是sticky
   */
  stickyHeader?: boolean;

  /**
   * 距离窗口顶部达到指定偏移量后触发
   */
  offsetTop?: number;

  /**
   * affix组件的的属性
   */
  affixProps?: {};

  /**
   * 在tree模式下的缩进尺寸， 仅在isTree为true时候有效
   */
  indent?: number;

  /**
   * 开启Table的tree模式, 接收的数据格式中包含children则渲染成tree table
   */
  isTree?: boolean;

  /**
   * 是否开启虚拟滚动
   */
  useVirtual?: boolean;

  /**
   * 设置行高
   */
  rowHeight?: number | (() => void);

  /**
   * 在内容区域滚动的时候触发的函数
   */
  onBodyScroll?: (() => void);
}

export default class Table extends React.Component<TableProps, any> {
  static Column: typeof Column;
  static ColumnGroup: typeof ColumnGroup;
  static GroupHeader: typeof GroupHeader;
  static GroupFooter: typeof GroupFooter;
}
