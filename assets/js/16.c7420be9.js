(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{496:function(s,a,t){"use strict";t.r(a);var n=t(4),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"一、指定项目发布程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、指定项目发布程序"}},[s._v("#")]),s._v(" 一、指定项目发布程序")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("dotnet publish -c release ."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Admin.Api"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Admin.Api.csproj -o "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".PublishFiles"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Admin.Api\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"二、通过-web-config-配置发布程序的环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、通过-web-config-配置发布程序的环境"}},[s._v("#")]),s._v(" 二、通过 web.config 配置发布程序的环境")]),s._v(" "),t("p",[s._v("项目根目录添加 web.config")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("?xml "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("encoding")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"utf-8"')]),s._v("?"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("configuration"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("location "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("path")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"."')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("inheritInChildApplications")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("system.webServer"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("handlers"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("add "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aspNetCore"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("path")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("verb")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("modules")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"AspNetCoreModule"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("resourceType")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Unspecified"')]),s._v(" /"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/handlers"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("aspNetCore "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("processPath")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dotnet"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("arguments")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('".\\Admin.Api.dll"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("stdoutLogEnabled")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("stdoutLogFile")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('".\\logs\\stdout"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("environmentVariables"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("environmentVariable "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ASPNETCORE_ENVIRONMENT"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("value")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Staging"')]),s._v(" /"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("--Development--"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("--Staging--"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("--Production--"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/environmentVariables"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/aspNetCore"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/system.webServer"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/location"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/configuration"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("h2",{attrs:{id:"三、通过-windows-批处理发布程序-参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、通过-windows-批处理发布程序-参考"}},[s._v("#")]),s._v(" 三、通过 Windows 批处理发布程序(参考)")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("color B\n\ndel  .PublishFiles"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("*.*   /s /q\n\ndotnet restore\n\ndotnet build\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" Blog.Core.Api\n\ndotnet publish -o "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Blog.Core.Api"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Debug"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("netcoreapp3.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\nmd "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".PublishFiles\n\nxcopy "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Blog.Core.Api"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Debug"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("netcoreapp3.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("*.* "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".PublishFiles"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" /s /e\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Successfully!!!! ^ please see the file .PublishFiles"')]),s._v("\n\ncmd\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);