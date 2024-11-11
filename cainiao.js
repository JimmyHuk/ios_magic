# Quantumult X 配置 - 菜鸟去广告
# 脚本作者: RuCu6
# 适配 Quantumult X 去除菜鸟广告
# 更新时间: 2024-10-31

[rewrite_local]
# 底栏 - 发现标签的角标
^https:\/\/cn-acs\.m\.cainiao\.com\/gw\/mtop\.cainiao\.app\.home\.tabbar\.marketing\.get\.cn url response-body {} status=200

# 首页 - 好物推荐、商品推广、底部标签页、快递详情页、问卷调查、主页图标
^https:\/\/cn-acs\.m\.cainiao\.com\/gw\/mtop\.cainiao\.adkeyword\.get\.cn url response-body {} status=200
^https:\/\/cn-acs\.m\.cainiao\.com\/gw\/mtop\.cainiao\.cncommunity\.my\.station\.query\.cn url response-body {} status=200
^https:\/\/cn-acs\.m\.cainiao\.com\/gw\/mtop\.cainiao\.guoguo\.nbnetflow\.ads\.(batch\.show\.v2|expose\.mreply|index)\.cn url response-body {} status=200
^https:\/\/cn-acs\.m\.cainiao\.com\/gw\/mtop\.cainiao\.nbopen\.miniapp\.recommend\.cpc\.cn url response-body {} status=200
^https:\/\/cn-acs\.m\.cainiao\.com\/gw\/mtop\.cainiao\.nbmensa\.research\.researchservice\.(acquire|event|close)\.cn url response-body {} status=200
^https:\/\/cn-acs\.m\.cainiao\.com\/gw\/mtop\.cainiao\.nbpresentation\.(homepage\.merge|tabbar\.marketing)\.get\.cn url response-body {} status=200

# 发现页 - 数字角标、裹裹券
^https:\/\/cn-acs\.m\.cainiao\.com\/gw\/mtop\.com\.cainiao\.cnactivitycenter url response-body {} status=200
^https:\/\/cn-acs\.m\.cainiao\.com\/gw\/mtop\.com\.cainiao\.cncreditmarket\.hit\.getactivityhit\.cn url response-body {} status=200
^https:\/\/cn-acs\.m\.cainiao\.com\/gw\/mtop\.com\.cainiao\.longquan\.place\.getpageresourcecontent\.cn url response-body {} status=200

# 支付宝 - 菜鸟小程序
^https:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.cainiao\.adx\.flyad\.getad url response-body {} status=200

[rewrite_remote]
# 我的页面推广
https:\/\/cn-acs\.m\.cainiao\.com\/gw\/mtop\.cainiao\.app\.mine\.main\.cn url script-response-body https://kelee.one/Resource/Script/Cainiao/Cainiao_remove_ads.js

# 首页 - 好物推荐、商品推广、底部标签页、快递详情页、问卷调查、主页图标
https:\/\/cn-acs\.m\.cainiao\.com\/gw\/mtop\.cainiao\.guoguo\.nbnetflow\.ads\.m?show\.cn url script-response-body https://kelee.one/Resource/Script/Cainiao/Cainiao_remove_ads.js
https:\/\/cn-acs\.m\.cainiao\.com\/gw\/mtop\.cainiao\.nbpresentation\.(pickup\.empty\.page|protocol\.homepage)\.get\.cn url script-response-body https://kelee.one/Resource/Script/Cainiao/Cainiao_remove_ads.js

# 消息中心
https:\/\/cn-acs\.m\.cainiao\.com\/gw\/mtop\.nbfriend\.message\.conversation\.list\.cn url script-response-body https://kelee.one/Resource/Script/Cainiao/Cainiao_remove_ads.js

# 支付宝 - 菜鸟小程序
https:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.cainiao\.guoguo\.nbnetflow\.ads\.mshow url script-response-body https://kelee.one/Resource/Script/Cainiao/Cainiao_remove_ads.js

[mitm]
hostname = cn-acs.m.cainiao.com, guide-acs.m.taobao.com
