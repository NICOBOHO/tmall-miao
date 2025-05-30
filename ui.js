"ui";

const APP_VERSION = 'app-7'
const VERSION = '20250618-B'

const deviceWidth = device.width
const deviceHeight = device.height

ui.layout(
    <drawer id="drawer">
        <vertical>
            <appbar>
                <toolbar color="white" id="toolbar" title="喵币助手（2025618）" h="auto" >
                </toolbar>
                <tabs id="tabs" />
            </appbar>
            <viewpager id="viewpager">
                {/* 第一页 */}
                <frame>
                    <scroll>
                        <vertical gravity="center|top">
                            <card w="{{parseInt(deviceWidth*0.95) + 'px'}}" h="{{parseInt(deviceHeight*0.05) + 'px'}}"
                                margin="5" cardCornerRadius="15dp" cardBackgroundColor="#f5f5f5" gravity="left">
                                <horizontal gravity="center_vertical" padding="5" id="checkUpdate">
                                    <text size="12dp" text="当前版本：{{APP_VERSION + '|' + VERSION}}" />
                                </horizontal>
                            </card>
                            <card w="{{parseInt(deviceWidth*0.95) + 'px'}}" h="auto"
                                margin="5" cardCornerRadius="15dp" cardBackgroundColor="#FFC0BE" gravity="left">
                                <vertical gravity="center_vertical">
                                    <text gravity="center" color="#E8110F" text="每日可领！618无门槛红包！！" size="30dp" />
                                    <text gravity="center" color="#E8110F" text="↓↓↓↓↓↓点击下方色块领取↓↓↓↓↓↓" />
                                    <horizontal gravity="center">
                                        <card w="{{parseInt(deviceWidth*0.45) + 'px'}}" h="{{parseInt(deviceHeight*0.18) + 'px'}}"
                                            margin="5" cardCornerRadius="15dp" cardBackgroundColor="#FF82A9"
                                            gravity="left" id="tbHb">
                                            <vertical gravity="center_vertical">
                                                <text gravity="center" color="#FFF000" text="淘宝大红包" size="30dp" />
                                                {/* <text gravity="center">10月14日 19点开始发放</text> */}
                                            </vertical>
                                        </card>
                                        <card w="{{parseInt(deviceWidth*0.45) + 'px'}}" h="{{parseInt(deviceHeight*0.18) + 'px'}}"
                                            margin="5" cardCornerRadius="15dp" cardBackgroundColor="#FF82A9"
                                            gravity="left" id="jdHb">
                                            <vertical gravity="center_vertical">
                                                <text gravity="center" color="#FFF000" text="京东大红包" size="30dp" />
                                                {/* <text gravity="center">10月14日 12点开始发放</text> */}
                                            </vertical>
                                        </card>
                                    </horizontal>
                                </vertical>
                            </card>
                            <horizontal gravity="center|top">
                                <card w="{{parseInt(deviceWidth*0.45) + 'px'}}" h="auto"
                                    margin="5" cardCornerRadius="15dp" cardBackgroundColor="#f5f5f5" gravity="left">
                                    <vertical gravity="center_vertical">
                                        <text gravity="center" color="blue" text="加入618互助组队" size="20dp" />
                                        <vertical gravity="center">
                                            {/* <button id="guild" text="QQ频道（推荐）" /> */}
                                            <button id="qun" text="QQ群：533943195" />
                                        </vertical>
                                    </vertical>
                                </card>
                                <card w="{{parseInt(deviceWidth*0.45) + 'px'}}" h="auto"
                                    margin="5" cardCornerRadius="15dp" cardBackgroundColor="#f5f5f5" gravity="left">
                                    <vertical gravity="center_vertical">
                                        <text gravity="center" color="blue" text="加入好价神车线报群" size="20dp" />
                                        <vertical gravity="center">
                                            {/* <button id="guild1" text="QQ频道（推荐）" /> */}
                                            <button id="qun2" text="QQ群：604427222" />
                                        </vertical>
                                    </vertical>
                                </card>
                            </horizontal>
                            {/* <card w="{{parseInt(deviceWidth*0.95) + 'px'}}" h="auto"
                                margin="5" cardCornerRadius="15dp" cardBackgroundColor="#FFC0BE" gravity="left">
                                    <text gravity="center" color="#E8110F" text="618红包5.29首发，尽情关注脚本更新" />
                            </card> */}
                            <text text="仅供学习参考，请勿用于非法用途，请于下载后24小时内删除。用户使用脚本导致的任何可能结果与开发者无关。" />
                            <text text="1. 本程序基于Auto.JS、AutoX.JS（感谢原开发者）" />
                            <text autoLink="web" text="2. 本程序完全免费，基础代码全部开源，项目地址：https://github.com/MonsterNone/tmall-miao" />
                            <text text="3. 由于调用淘宝打开页面，部分手机管家可能会误报为诱导软件，实际上本软件绝无任何病毒行为。" />
                        </vertical>
                    </scroll>
                </frame>
                {/* 第二页 */}
                {/* <frame>
                    <horizontal gravity="center_vertical|center_horizontal">
                        <card w="{{parseInt(deviceWidth*0.48) + 'px'}}" h="*"
                            margin="5" cardCornerRadius="15dp" cardBackgroundColor="#f5f5f5" gravity="center|top">
                            <vertical>
                                <text textStyle="bold" gravity="center|top" textSize="18dp">淘宝会场(可滑动查看)</text>
                                <scroll gravity="center|top">
                                    <vertical>
                                        <card marginBottom="10dp" h="auto" w="*" cardBackgroundColor="#f5f5f5" id="tb1">
                                            <vertical>
                                                <img layout_gravity="center" src="file://./res/activity/tb1.jpg" />
                                                <text gravity="center" textSize="16dp">618主会场（能量）</text>
                                            </vertical>
                                        </card>
                                        <card marginBottom="10dp" h="auto" w="*" cardBackgroundColor="#f5f5f5" id="tb2">
                                            <vertical>
                                                <img layout_gravity="center" src="file://./res/activity/tb2.jpg" />
                                                <text gravity="center" textSize="16dp">预售会场（幸运值）</text>
                                            </vertical>
                                        </card>
                                        <card marginBottom="10dp" h="auto" w="*" cardBackgroundColor="#f5f5f5" id="tb3">
                                            <vertical>
                                                <img layout_gravity="center" src="file://./res/activity/tb3.jpg" />
                                                <text gravity="center" textSize="16dp">聚划算618主会场</text>
                                            </vertical>
                                        </card>
                                        <card marginBottom="10dp" h="auto" w="*" cardBackgroundColor="#f5f5f5" id="tb4">
                                            <vertical>
                                                <img layout_gravity="center" src="file://./res/activity/tb4.jpg" />
                                                <text gravity="center" textSize="16dp">天猫超市618</text>
                                            </vertical>
                                        </card>
                                    </vertical>
                                </scroll>
                            </vertical>
                        </card>
                        <card w="{{parseInt(deviceWidth*0.48) + 'px'}}" h="*"
                            margin="5" cardCornerRadius="15dp" cardBackgroundColor="#f5f5f5" gravity="center|top">
                            <vertical>
                                <text textStyle="bold" gravity="center|top" textSize="18dp">京东会场(可滑动查看)</text>
                                <scroll gravity="center|top">
                                    <vertical>
                                        <card marginBottom="10dp" h="auto" w="*" cardBackgroundColor="#f5f5f5" id="jd1">
                                            <vertical>
                                                <img layout_gravity="center" src="file://./res/activity/jd1.jpg" />
                                                <text gravity="center" textSize="16dp">主会场（打卡等任务）</text>
                                            </vertical>
                                        </card>
                                        <card marginBottom="10dp" h="auto" w="*" cardBackgroundColor="#f5f5f5" id="jd2">
                                            <vertical>
                                                <img layout_gravity="center" src="file://./res/activity/jd2.jpg" />
                                                <text gravity="center" textSize="16dp">3C数码618</text>
                                            </vertical>
                                        </card>
                                        <card marginBottom="10dp" h="auto" w="*" cardBackgroundColor="#f5f5f5" id="jd3">
                                            <vertical>
                                                <img layout_gravity="center" src="file://./res/activity/jd3.jpg" />
                                                <text gravity="center" textSize="16dp">家清纸品分会场</text>
                                            </vertical>
                                        </card>
                                        <card marginBottom="10dp" h="auto" w="*" cardBackgroundColor="#f5f5f5" id="jd4">
                                            <vertical>
                                                <img layout_gravity="center" src="file://./res/activity/jd4.jpg" />
                                                <text gravity="center" textSize="16dp">京东超市特惠购</text>
                                            </vertical>
                                        </card>
                                    </vertical>
                                </scroll>
                            </vertical>
                        </card>
                    </horizontal>
                </frame> */}
                {/* 第三页 */}
                <frame>
                    <scroll>
                        <vertical>
                            <text text="仅供学习参考，直接运行有可能导致任务收益减少。" textStyle="italic" textColor="red" textSize="18dp" />
                            {/* <text text="运行前需要首先在首页授予权限！！！！" textStyle="bold" textColor="red" textSize="30dp" /> */}
                            <card w="{{parseInt(deviceWidth*0.95) + 'px'}}" h="{{parseInt(deviceHeight*0.1) + 'px'}}"
                                margin="5" cardCornerRadius="15dp" cardBackgroundColor="#f5f5f5" gravity="left">
                                <vertical gravity="center_vertical">
                                    <text gravity="center" color="red" text="运行脚本请先授予权限" size="20dp" />
                                    <horizontal gravity="center">
                                        <button id="consolePermission" text="1. 授予悬浮窗权限" />
                                        <button id="automationPermission" text="2. 授予无障碍权限" />
                                    </horizontal>
                                </vertical>
                            </card>
                            <card w="{{parseInt(deviceWidth*0.95) + 'px'}}" h="auto"
                                margin="5" cardCornerRadius="15dp" cardBackgroundColor="#f5f5f5" gravity="left">
                                <vertical gravity="center_vertical">
                                    <text gravity="center" text="淘宝任务" size="20dp" color="#FF6D31" />
                                    <horizontal gravity="center">
                                        <button id="startTask" text="10亿淘金币任务" />
                                        <button id="huichangTask" text="能量红包任务" />
                                        <button id="tbHb1" text="淘宝618红包" />
                                        {/* <text>暂未开始</text> */}
                                    </horizontal>
                                    {/* <horizontal gravity="center"> */}
                                        {/* <button id="starTask" text="天猫全明星任务" /> */}
                                        {/* <button id="luckTask" text="预售会场任务" /> */}
                                    {/* </horizontal> */}
                                </vertical>
                            </card>
                            <card w="{{parseInt(deviceWidth*0.95) + 'px'}}" h="auto"
                                margin="5" cardCornerRadius="15dp" cardBackgroundColor="#f5f5f5" gravity="left">
                                <vertical gravity="center_vertical">
                                    <text gravity="center" text="京东任务" size="20dp" color="#FF6D31" />
                                    <horizontal gravity="center">
                                        {/* <button id="startJDTask" text="京东奖票任务" /> */}
                                        {/* <button id="startJDHb" text="打卡任务" /> */}
                                        <button id="jdHb1" text="京东618红包" />
                                        {/* <text>暂未开始</text> */}
                                    </horizontal>
                                </vertical>
                            </card>
                            <scroll>
                                <vertical margin="5">
                                    <text textStyle="bold">使用帮助：</text>
                                    <text>在首页授予权限模块，给予软件运行必要的权限，之后点击上方按钮即可完成任务。</text>
                                    <text color="red"> 京东任务开始前推荐进行以下操作</text>
                                    <text textStyle="bold">在京东app-我的页面，点击客户服务，发送 debugtbs.qq.com，然后点击自己的消息打开网页；选择安装线上内核，安装完成之后强行关闭京东；运行任务尝试。此方法原理为使用腾讯tbs内核代替系统webview。</text>
                                    <text>-------------</text>
                                    <text textStyle="bold">可能出现的问题：</text>
                                    <text>Q: 点击开始运行，跳转到通知权限页面</text>
                                    <text>A: 华为/荣耀机型需要在设置-应用管理内手动打开软件的悬浮窗权限</text>
                                    <text>Q: 任务长时间停留在模拟滑动，且没有新日志展示（一般是MIUI）</text>
                                    <text>A: 在设置中强行停止助手，重新运行尝试</text>
                                    <text>Q: 支付宝、京东金融、微信小程序任务</text>
                                    <text>A: 都不会添加。小程序无法获取控件只能截图，性能太差；另二者涉及到财产安全，不会设计自动完成。</text>
                                </vertical>
                            </scroll>
                        </vertical>
                    </scroll>
                </frame>
                {/* 第四页
                <frame>
                    <com.stardust.autojs.core.console.ConsoleView id="console" h="*" />
                </frame> */}
            </viewpager>
        </vertical>
    </drawer>
);

activity.setSupportActionBar(ui.toolbar);
// ui.viewpager.setTitles(["主页", "618会场", "进行任务"]);
ui.viewpager.setTitles(["主页", "进行任务"]);
ui.tabs.setupWithViewPager(ui.viewpager);
// ui.viewpager.setOnPageChangeListener({
//     //已选定页面发生改变时触发
//     onPageSelected: function (index) {
//         if (index == 4) {
//             /**控制台 */
//             ui.console.setConsole(runtime.console);
//             // ui.console.findViewById(org.autojs.autojs.R.id.input_container).setVisibility(android.view.View.GONE);
//             //ui.console.setConsole(org.autojs.autojs.autojs.AutoJs.getInstance().getGlobalConsole());            

//             // 设置控制台字体颜色
//             let c = new android.util.SparseArray();
//             let Log = android.util.Log;
//             c.put(Log.VERBOSE, new java.lang.Integer(colors.parseColor("#dfc0c0c0")));
//             c.put(Log.DEBUG, new java.lang.Integer(colors.parseColor("#cc000000")));
//             c.put(Log.INFO, new java.lang.Integer(colors.parseColor("#ff64dd17")));
//             c.put(Log.WARN, new java.lang.Integer(colors.parseColor("#ff2962ff")));
//             c.put(Log.ERROR, new java.lang.Integer(colors.parseColor("#ffd50000")));
//             c.put(Log.ASSERT, new java.lang.Integer(colors.parseColor("#ffff534e")));
//             ui.console.setColors(c);
//             /**控制台 */
//         }
//     }
// })

// threads.start(checkUpdate)

confirm('为了保证运行效果，软件启动后会清空一次剪贴板，不允许请点取消')
    .then(value => {
        if (value) {
            setClip('')
            toast('剪贴板清空')
        } else {
            toast('不清空')
        }
    })

ui.checkUpdate.click(function () {
    threads.start(checkUpdate)
})

ui.consolePermission.click(function () {
    threads.start(conPerReq)
})

ui.automationPermission.click(function () {
    threads.start(autoPerReq)
})

// ui.guild.click(function () {
//     app.startActivity({
//         action: 'VIEW',
//         data: 'mqqapi://forward/url?url_prefix=aHR0cHM6Ly9wZC5xcS5jb20vcy9hM2l4YzI5OTY='
//     })
// })

ui.qun.click(function () {
    app.startActivity({
        action: 'VIEW',
        // data: 'mqqapi://forward/url?url_prefix=aHR0cHM6Ly9oNS5xdW4ucXEuY29tL3MvTks4Y2RBV0hHbQ=='
        data: 'mqqapi://card/show_pslcard?src_type=internal&version=1&uin=533943195&card_type=group&source=qrcode'
    })
})

ui.qun2.click(function () {
    app.startActivity({
        action: 'VIEW',
        data: 'mqqapi://card/show_pslcard?src_type=internal&version=1&uin=604427222&card_type=group&source=qrcode'
        // data: 'mqqapi://forward/url?url_prefix=aHR0cHM6Ly9oNS5xdW4ucXEuY29tL3MvZWszcXhPNkhEaQ=='
    })
})

function tbHb() {
    openTbUrl('https://s.click.taobao.com/yKOsJcr')
}

function jdHb() {
    dialogs.build({
        //对话框标题
        title: '京东红包请手动领取哦',
        //对话框内容
        content: "京东APP搜索【红包快来886】领取",
        //确定键内容
        positive: "复制口令",
        neutral: "链接领取"
    }).on("positive", ()=>{
        setClip("红包快来886")
        toast('口令已复制，请在京东搜索')
    }).on("neutral", ()=>{
        app.openUrl("https://u.jd.com/rDWWw9D");
    }).show();
}

ui.tbHb.click(tbHb)
ui.tbHb1.click(tbHb)

ui.jdHb.click(jdHb)
ui.jdHb1.click(jdHb)

// ui.tb1.click(function () { openTbUrl('https://s.click.taobao.com/k6RvK7u') })
// ui.tb2.click(function () { openTbUrl('https://s.click.taobao.com/fq9lt6u') })
// ui.tb3.click(function () { openTbUrl('https://s.click.taobao.com/RkTuC7u') })
// ui.tb4.click(function () { openTbUrl('https://s.click.taobao.com/I6atC7u') })
// ui.tb5.click(function () { openTbUrl('https://s.click.taobao.com/OYPYLGu') })
// ui.jd1.click(function () { openJdUrl('https://u.jd.com/0i4i6y5') })
// ui.jd2.click(function () { openJdUrl('https://u.jd.com/BQuXRMN') })
// ui.jd3.click(function () { openJdUrl('https://u.jd.com/BquHtaL') })
// ui.jd4.click(function () { openJdUrl('https://u.jd.com/BustsfA') })
// ui.jd5.click(function () { openJdUrl('') })

ui.startTask.click(function () {
    // alert('淘宝活动尚未开始', '敬请关注脚本更新')
    engines.execScriptFile('./start.js')
})

// ui.luckTask.click(function () {
//     engines.execScriptFile('./tb_luck.js')
// })

ui.huichangTask.click(function () {
    engines.execScriptFile('./tb_huichang.js')
})

// ui.starTask.click(function () {
//     engines.execScriptFile('./tb_star.js')
// })

// ui.startJDTask.click(function () {
//     // alert('京东活动尚未开始', '敬请关注脚本更新')
//     engines.execScriptFile('./start_jd.js')
// })

// ui.startJDHb.click(function () {
//     engines.execScriptFile('./jd_hb.js')
// })

// 唤起京东APP打开url的方法
function openJdUrl(url) {
    app.startActivity({
        action: "VIEW",
        data: 'openApp.jdMobile://virtual?params={"category":"jump","des":"m","sourceValue":"JSHOP_SOURCE_VALUE","sourceType":"JSHOP_SOURCE_TYPE","url":"' + url + '","M_sourceFrom":"h5auto","msf_type":"auto"}'
    })
}

// 唤起淘宝APP打开url的方法，此处url带不带http头都可
function openTbUrl(url) {
    url = url.replace(/https?:\/\//, '')
    app.startActivity({
        action: "VIEW",
        data: "taobao://" + url
    })
}

function conPerReq() {
    toast('打开悬浮窗权限')
    alert('部分系统显示风险应用无法打开', '请在手机管家-病毒查杀中移除管控或添加病毒查杀忽略名单，即可打开')
    console.show()
    console.log('悬浮窗权限授予成功！此窗口马上消失')
    sleep(1000)
    console.hide()
}

function autoPerReq() {
    if (!auto.service) {
        alert('找到618任务助手，勾选授予权限', '部分机型在“已安装服务”中')
    }
    auto.waitFor()
    toast('无障碍权限授予成功')
}

function checkUpdate() {
    alert('项目升级，手动更新功能关闭', '软件启动时自动检查更新')
}

// function checkUpdate() {
//     if (VERSION == 0) {
//         toast('无法加载version.js')
//         return
//     }
//     toast('正在检查更新')
//     const versionUrl = 'https://gitlab.com/MonsterNone/tmall-miao/-/raw/main/version'
//     http.get(versionUrl, {}, function (res, err) {
//         if (err) {
//             toast('检查更新出错，请手动前往项目地址查看')
//             return
//         }
//         try {
//             res = res.body.json()
//         } catch (err) {
//             toast('检查更新出错，请手动前往项目地址查看')
//             return
//         }
//         const version = res.version
//         const log = res.log
//         if (version != VERSION) {
//             var go = confirm("有新的版本，前往下载" + version, log)
//             if (go) {
//                 alert('如果打不开Github链接，请查看QQ频道（或QQ群）公告至蓝奏云下载')
//                 app.openUrl('https://github.com/MonsterNone/tmall-miao/releases/latest')
//             }
//         } else {
//             toast('当前为最新版')
//         }
//     })
// }