import React from 'react';
import {
  DashboardOutlined,
  FormOutlined,
  ProfileOutlined,
  TableOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';

/**
 * 左侧菜单 需要展示的路由
 * @param {iconType} antd内置图标
 * @param {text} label展示
 * @param {PERMISSIONS} 包含的所有权限 有一个就需要展示
 * @param {children} 子菜单
 * @param {to} 跳转地址
 */
export default [
  {
    key: 'home',
    iconType: <DashboardOutlined />,
    text: 'Dashboard',
    PERMISSIONS: true,
    children: [],
    to: '/home',
  },
  {
    key: 'form',
    iconType: <FormOutlined />,
    text: '表单页',
    PERMISSIONS: true,
    children: [
      {
        to: '/form/baseForm',
        text: '基础表单',
        PERMISSIONS: true,
      },
      {
        to: '/form/uploadForm',
        text: '上传表单',
        PERMISSIONS: true,
      },
    ],
  },
  {
    key: 'table',
    iconType: <TableOutlined />,
    text: '表格页',
    PERMISSIONS: true,
    children: [
      {
        to: '/table/searchTable',
        text: '查询表格',
        PERMISSIONS: true,
      },
    ],
  },
  {
    key: 'list',
    iconType: <UnorderedListOutlined />,
    text: '列表页',
    PERMISSIONS: true,
    children: [
      {
        to: '/list/tabList',
        text: '卡片表格切换',
        PERMISSIONS: true,
      },
    ],
  },
  {
    key: 'detail',
    iconType: <ProfileOutlined />,
    text: '详情页',
    PERMISSIONS: true,
    children: [
      {
        to: '/detail/baseDetail/1200000',
        text: '基础详情页',
        PERMISSIONS: true,
      },
    ],
  },
];
