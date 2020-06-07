(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{378:function(e,s,v){"use strict";v.r(s);var r=v(14),_=Object(r.a)({},(function(){var e=this,s=e.$createElement,v=e._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"redis6学习"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis6学习"}},[e._v("#")]),e._v(" redis6学习")]),e._v(" "),v("h2",{attrs:{id:"redis可执行文件组成"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis可执行文件组成"}},[e._v("#")]),e._v(" redis可执行文件组成")]),e._v(" "),v("ul",[v("li",[e._v("redis-benchmark:性能测试")]),e._v(" "),v("li",[e._v("redis-check-aof:修复有问题的aof文件")]),e._v(" "),v("li",[e._v("redis-check-rdb:修复有问题的rdb")]),e._v(" "),v("li",[e._v("redis-sentinel:Redis集群使用")]),e._v(" "),v("li",[e._v("redis-server:Redis服务器启动命令")]),e._v(" "),v("li",[e._v("redis-cli:客户端，操作入口")])]),e._v(" "),v("h2",{attrs:{id:"redis-conf"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis-conf"}},[e._v("#")]),e._v(" redis.conf")]),e._v(" "),v("p",[e._v("redis.conf是redis的默认配置文件。在macos下，位于"),v("code",[e._v("/usr/local/etc/redis.conf")])]),e._v(" "),v("p",[e._v("使用当前redis.conf的内容来初始化redis: "),v("code",[e._v("redis-server redis.conf")])]),e._v(" "),v("p",[e._v("如果不使用redis.conf来初始化redis的启动，redis会开启后会警告 "),v("code",[e._v("Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf")]),e._v(" 如果使用redis.conf来初始化，会提示"),v("code",[e._v("Configuration loaded")])]),e._v(" "),v("p",[e._v("默认redis的启动为用户服务，redis将会把启动信息打印在控制台窗口中，如果关闭这个窗口，redis服务也关闭了。")]),e._v(" "),v("p",[e._v("如果将redis.conf文件里面的"),v("code",[e._v("deamonize no")]),e._v(" 改成 "),v("code",[e._v("yes")]),e._v("，就可以让redis服务在后台启动。")]),e._v(" "),v("h2",{attrs:{id:"客户端访问redis-server"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#客户端访问redis-server"}},[e._v("#")]),e._v(" 客户端访问redis-server")]),e._v(" "),v("p",[e._v("启动客户端，直接执行redis-cli即可,如果需要多个客户端端口去连接redis-server，可以使用"),v("code",[e._v("redis-cli -p [portNum]")]),e._v("实现。")]),e._v(" "),v("h2",{attrs:{id:"测试客户端连接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#测试客户端连接"}},[e._v("#")]),e._v(" 测试客户端连接")]),e._v(" "),v("p",[e._v("在cli中使用"),v("code",[e._v("ping")]),e._v("命令，如果是可以正常响应的，会返回"),v("code",[e._v("pong")]),e._v("。")]),e._v(" "),v("h2",{attrs:{id:"关闭server"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关闭server"}},[e._v("#")]),e._v(" 关闭Server")]),e._v(" "),v("p",[e._v("若cli已经连接，在链接中使用"),v("code",[e._v("shutdown")]),e._v("，即可关闭连接。")]),e._v(" "),v("p",[e._v("若没有cli连接server，使用"),v("code",[e._v("redis-cli shutdown")]),e._v("也可以关闭server。")]),e._v(" "),v("h2",{attrs:{id:"默认数据库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#默认数据库"}},[e._v("#")]),e._v(" 默认数据库")]),e._v(" "),v("p",[e._v("redis默认有16个数据库。从0开始，默认使用0号库。")]),e._v(" "),v("h2",{attrs:{id:"切换数据库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#切换数据库"}},[e._v("#")]),e._v(" 切换数据库")]),e._v(" "),v("p",[e._v("使用命令 "),v("code",[e._v("select <dbid>")]),e._v(" 即可切换数据库，例如 "),v("code",[e._v("select 8")]),e._v("。")]),e._v(" "),v("h2",{attrs:{id:"密码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#密码"}},[e._v("#")]),e._v(" 密码")]),e._v(" "),v("p",[e._v("redis统一密码库，所有库都是同样的密码。")]),e._v(" "),v("h2",{attrs:{id:"redis6线程更改"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis6线程更改"}},[e._v("#")]),e._v(" redis6线程更改")]),e._v(" "),v("p",[e._v("redis6之后引入了多线程。但是redis6的多线程默认是禁用的。只使用主线程。若开启要修改redis.conf，"),v("code",[e._v("io-threads-do-reads yes")])]),e._v(" "),v("p",[e._v("redis6多线程开启后，还需要设置线程数，否则不生效。")]),e._v(" "),v("p",[v("code",[e._v("io-threads 4")])]),e._v(" "),v("p",[e._v("线程数一般要小于机器cpu核心数。比如如果是4核那局设置2-3个核心。线程数不是越大越好。")]),e._v(" "),v("h2",{attrs:{id:"redis-数据类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis-数据类型"}},[e._v("#")]),e._v(" redis 数据类型")]),e._v(" "),v("p",[e._v("key-value存储，数据类型:")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("string")])]),e._v(" "),v("li",[v("p",[e._v("set")])]),e._v(" "),v("li",[v("p",[e._v("list")])]),e._v(" "),v("li",[v("p",[e._v("hash")])]),e._v(" "),v("li",[v("p",[e._v("zset")])]),e._v(" "),v("li",[v("p",[e._v("keys * :查询当前库的所有键。")])]),e._v(" "),v("li",[v("p",[e._v("exists "),v("key",[e._v(" :判断某个键是否存在(存在返回1，不存在返回0)")])],1)]),e._v(" "),v("li",[v("p",[e._v("type "),v("key",[e._v(" :查看键的类型")])],1)]),e._v(" "),v("li",[v("p",[e._v("del "),v("key",[e._v(" :删除某个键")])],1)]),e._v(" "),v("li",[v("p",[e._v("expire "),v("key",[v("seconds",[e._v(" :为键值设置过期时间，单位为秒")])],1)],1)]),e._v(" "),v("li",[v("p",[e._v("ttl "),v("key",[e._v(" :查看还有多少秒过期，如果-1表示永不过期，-2表示已过期。")])],1)]),e._v(" "),v("li",[v("p",[e._v("dbsize :查看当前数据库key的数量")])]),e._v(" "),v("li",[v("p",[e._v("flushdb :清空当前库数据库")])]),e._v(" "),v("li",[v("p",[e._v("flushall :清空全部redis库")])])]),e._v(" "),v("p",[e._v("String类型：")]),e._v(" "),v("ul",[v("li",[e._v("string是Redis最基本的类型，一个key对应一个value")]),e._v(" "),v("li",[e._v("string类型是二进制安全的。意味着redis的string可以包含任何数据。比如jpg图片或者序列化的对象。")]),e._v(" "),v("li",[e._v("string类型是redis最基本的数据类型，一个redis中字符串value最多可以是512M")])]),e._v(" "),v("p",[e._v("匹配partten：")]),e._v(" "),v("ul",[v("li",[v("ul",[v("li",[e._v("全查")])])]),e._v(" "),v("li",[e._v("? 占位符")]),e._v(" "),v("li",[e._v("*[1-2] 以括号里结尾")])])])}),[],!1,null,null,null);s.default=_.exports}}]);