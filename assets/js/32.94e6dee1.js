(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{512:function(s,a,n){"use strict";n.r(a);var e=n(4),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("version: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3.6"')]),s._v("\nservices:\n  drone-server:\n    image: drone/drone:1\n    container_name: drone-server\n    ports:\n      - "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8080:80"')]),s._v("\n      - "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8000:8000"')]),s._v("\n      - "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"9000:9000"')]),s._v("\n    volumes:\n      - ./var/run/docker.sock:/var/run/docker.sock\n      - ./dnmp/drone/:/var/lib/drone/:rw\n    restart: always\n    environment:\n      - "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DRONE_GITEA_SERVER")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://www.test.com/git\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#- DRONE_GITEA_SERVER=http://127.0.0.1:10080")]),s._v("\n      - "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DRONE_GITEA_CLIENT_ID")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("d4d0bc58-a1f2-40e2-84b5-cd00532e5e08\n      - "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DRONE_GITEA_CLIENT_SECRET")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1TRMM2YKYdyn1jqw1T3MKXejy-ow_1-Oh8oMT_dbv44"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n      - "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DRONE_GIT_ALWAYS_AUTH")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false\n      - "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DRONE_RUNNER_CAPACITY")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n      - "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DRONE_SERVER_HOST")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("www.test.com:8080\n      - "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DRONE_SERVER_PROTO")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http\n      - "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DRONE_RPC_SECRET")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("9c3921e3e748aff725d2e16ef31fbc42\n      - "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DRONE_TLS_AUTOCERT")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false\n      - "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DRONE_LOGS_DEBUG")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n      - "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TZ")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Asia/Shanghai\n    restart: always\n    networks:\n      my-network:\n       ipv4_address: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.3")]),s._v(".0.4\n\n  drone-agent:\n    image: drone/agent:1\n    container_name: drone-agent\n    command: agent\n    restart: always\n    depends_on:\n      - drone-server\n    volumes:\n      - ./var/run/docker.sock:/var/run/docker.sock\n    environment:\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#- DRONE_RPC_SERVER=http://192.168.88.190:9000")]),s._v("\n      - "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DRONE_RPC_SERVER")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.3")]),s._v(".0.4:9000\n      - "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DRONE_RPC_SECRET")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("9c3921e3e748aff725d2e16ef31fbc42\n      - "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DRONE_RUNNER_CAPACITY")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n      - "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DRONE_RUNNER_NAME")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("drone-agent\n      - "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DRONE_LOGS_DEBUG")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n      - "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TZ")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Asia/Shanghai\n    restart: always\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#detach: true")]),s._v("\n    networks:\n      my-network:\n       ipv4_address: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.3")]),s._v(".0.5\n\nnetworks:\n my-network:\n  external: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);