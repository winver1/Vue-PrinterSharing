
export const menuData = [
    {
        optionName: "我的主页",
        iconClassName: "el-icon-eleme",
        index: '1',
        roles:['10','1','2','3'],
        childList: [
            {
                optionName: '个人信息',
                index: '1-1',
                routerName: "userinfo",
                iconClassName: "el-icon-user",
                roles:['10','1','2','3']
            },

            {
                optionName: '安全中心',
                index: '1-5',
                routerName: "safecenter",
                iconClassName: "el-icon-lock",
                roles:['10','1','2','3']
            },
            {
                optionName: '快捷导航',
                index: '1-3',
                routerName: "dh",
                iconClassName: "el-icon-user",
                roles:['10','1','2','3']
            },
        ]
    },
    {
        optionName: "管理系统",
        iconClassName: "el-icon-setting",
        index: '2',
        disabled: false, // 是否禁用
        roles:['1','10'],
        childList: [
            {
                optionName: '用户管理',
                index: '2-1',
                routerName: "UserManagement",
                iconClassName: "el-icon-user",
                roles:['10','1'],
            },
            {
                optionName: '导航分类',
                index: '2-2',
                routerName: "navfenlei",
                iconClassName: "el-icon-guide",
                roles:['10','1'],
            },
            {
                optionName: '导航内容',
                index: '2-3',
                routerName: "navfenleiitem",
                iconClassName: "el-icon-guide",
                roles:['10','1'],
            }
        ]
    },
    {
        optionName: "打印服务",
        iconClassName: "el-icon-printer",
        index: '3',
        disabled: false, // 是否禁用
        roles:['10','1','2'],
        childList: [
            {
                optionName: '共享打印',
                index: '2-1',
                routerName: "printPDF",
                iconClassName: "el-icon-document",
                roles:['10','1','2']
            },
            {
                optionName: '我的历史记录',
                index: '2-2',
                routerName: "myHistoryPrints",
                iconClassName: "el-icon-document",
                roles:['10','1','2']
            },
            {
                optionName: '全部历史记录',
                index: '2-4',
                routerName: "allUserHistoryPrints",
                iconClassName: "el-icon-document",
                roles:['10','1']
            },
        ]
    },
    {
        optionName: "文档",
        iconClassName: "el-icon-document",
        index: '4',
        disabled: false, // 是否禁用
        roles:['10','1','2','3'],
        childList: [
            {
                optionName: '文档首页',
                index: '2-1',
                routerName: "docindex",
                iconClassName: "el-icon-document",
                roles:['10','1','2','3']
            }
        ]
    },
    {
        optionName: "文件服务器",
        iconClassName: "el-icon-document",
        index: '6',
        disabled: false, // 是否禁用
        roles:['10','1','2'],
        childList: [
            {
                optionName: '文件服务器',
                index: '6-1',
                routerName: "files",
                iconClassName: "el-icon-document",
                roles:['10','1','2']
            }
        ]
    },
    {
        optionName: "AI监控预览[Beta]",
        iconClassName: "el-icon-camera",
        index: '7',
        disabled: false, // 是否禁用
        roles:['10','1'],
        childList: [
            {
                optionName: 'AI监控预览-1',
                index: '7-1',
                routerName: "ipcview1",
                iconClassName: "el-icon-camera",
                roles:['10','1']
            },
            {
                optionName: 'AI监控预览-2',
                index: '7-2',
                routerName: "ipcview2",
                iconClassName: "el-icon-camera",
                roles:['10','1']
            }
        ]
    }

]


/* 菜单配置 描述 */
export const menuData描述 = [
    // 有子菜单 并且字菜单分组的
    {
        optionName: "导航一", // 一级菜单名
        iconClassName: "aaa", // element-ui图标名
        index: '1', // 唯一标志
        childList: [ // 分组的
            {
                groupName: '组名一',
                index: '1-1-1',
                list: [
                    {
                        optionName: '选项1',
                        routerName: "home"
                    },
                    {}
                ],
            },
            {
                groupName: '组名二',
                index: '1-1-2',
                list: [
                    {
                        optionName: '选项1',
                        routerName: "home"
                    },
                    {}
                ],
            }
        ],
    },
    // 有子菜单 字菜单不分组的
    {
        optionName: "导航二",
        iconClassName: "el-icon-menu",
        index: '2',
        disabled: false, // 是否禁用
        childList: [ // 不分组的
            {
                optionName: '选项1',
                index: '2-1',
                routerName: "home"
            },
            {}
        ]
    },
    // 无子菜单的
    {
        optionName: "导航三",
        iconClassName: "el-icon-document",
        routerName: "home",
        index: '3',
        disabled: false
    },

    "导航四"
]

