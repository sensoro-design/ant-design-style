(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"9kvl":function(n,t,e){"use strict";var a=e("FfOG");e.d(t,"a",(function(){return a["b"]}));e("bCY9")},afA6:function(n,t,e){"use strict";e.r(t);var a=e("mn0l"),r=e("ahKI"),o=e.n(r),i=e("q3YX"),s=e("DBVu"),l=e("GAyR"),c=e("wMDr"),d='import "../index.less";\nimport "../_docs.less";\n\nexport default () => {\n  return (\n    <>\n      <div className="ant-alert ant-alert-success">\u8fd9\u662f\u4e00\u6761\u6210\u529f\u7684\u6d88\u606f\u63d0\u793a</div>\n      <div className="ant-alert ant-alert-info">\u8fd9\u662f\u4e00\u6761\u666e\u901a\u7684\u6d88\u606f\u63d0\u793a</div>\n      <div className="ant-alert ant-alert-warning">\u8fd9\u662f\u4e00\u6761\u8b66\u793a\u4fe1\u606f</div>\n      <div className="ant-alert ant-alert-error">\u9ad8\u5371\u64cd\u4f5c/\u51fa\u9519\u4fe1\u606f\u63d0\u793a</div>\n    </>\n  );\n};',p="@import \"../../style/index.less\";\n@import '../../style/mixins/index';\n\n@alert-prefix-cls: ~'@{ant-prefix}-alert';\n\n.@{alert-prefix-cls} {\n  .reset-component();\n\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding: 9px 16px;\n  word-wrap: break-word;\n  border-radius: @border-radius-base;\n\n  &-content {\n    flex: 1;\n    min-width: 0;\n  }\n\n  &-icon {\n    font-size: 20px;\n    margin-right: @margin-xs;\n  }\n\n  &-description {\n    display: none;\n    font-size: @font-size-base;\n    line-height: @font-size-base + 8px;\n  }\n\n  &-success {\n    background-color: @alert-success-bg-color;\n    .@{alert-prefix-cls}-icon {\n      color: @alert-success-icon-color;\n    }\n  }\n\n  &-info {\n    background-color: @alert-info-bg-color;\n    .@{alert-prefix-cls}-icon {\n      color: @alert-info-icon-color;\n    }\n  }\n\n  &-warning {\n    background-color: @alert-warning-bg-color;\n    .@{alert-prefix-cls}-icon {\n      color: @alert-warning-icon-color;\n    }\n  }\n\n  &-error {\n    background-color: @alert-error-bg-color;\n\n    .@{alert-prefix-cls}-icon {\n      color: @alert-error-icon-color;\n    }\n\n    .@{alert-prefix-cls}-description > pre {\n      margin: 0;\n      padding: 0;\n    }\n  }\n\n  &-action {\n    margin-left: @margin-xs;\n  }\n\n  &-close-icon {\n    margin-left: @margin-md;\n    padding: 0;\n    overflow: hidden;\n    //font-size: 20px;\n    line-height: 20px;\n    width: 20px;\n    height: 20px;\n    border-radius: 10px;\n    background-color: transparent;\n    border: none;\n    outline: none;\n    cursor: pointer;\n\n    &:hover {\n      background-color: @alert-close-bg-color;\n    }\n\n    .@{iconfont-css-prefix}-close {\n      font-size: 14px;\n      color: @alert-close-color;\n      transition: color 0.3s;\n\n      &:hover {\n        color: @alert-close-hover-color;\n      }\n    }\n  }\n\n  &-close-text {\n    color: @alert-close-color;\n    transition: color 0.3s;\n\n    &:hover {\n      color: @alert-close-hover-color;\n    }\n  }\n\n  &-with-description {\n    align-items: flex-start;\n    padding: @alert-with-description-padding;\n  }\n\n  &-with-description&-no-icon {\n    padding: @alert-with-description-no-icon-padding-vertical 15px;\n  }\n\n  &-with-description &-icon {\n    margin-right: @alert-with-description-padding-vertical;\n    font-size: @alert-with-description-icon-size;\n  }\n\n  &-with-description &-message {\n    display: block;\n    margin-bottom: 4px;\n    color: @alert-message-color;\n    font-size: @font-size-lg;\n  }\n\n  &-message {\n    color: @alert-message-color;\n  }\n\n  &-with-description &-description {\n    display: block;\n  }\n\n  &&-motion-leave {\n    overflow: hidden;\n    opacity: 1;\n    transition: max-height 0.3s @ease-in-out-circ, opacity 0.3s @ease-in-out-circ,\n    padding-top 0.3s @ease-in-out-circ, padding-bottom 0.3s @ease-in-out-circ,\n    margin-bottom 0.3s @ease-in-out-circ;\n  }\n\n  &&-motion-leave-active {\n    max-height: 0;\n    margin-bottom: 0 !important;\n    padding-top: 0;\n    padding-bottom: 0;\n    opacity: 0;\n  }\n\n  &-banner {\n    margin-bottom: 0;\n    border: 0;\n    border-radius: 0;\n  }\n}\n\n@import './rtl';",u='[class*="__dumi-default-previewer-demo"] {\n  .ant-alert:not(:last-child) {\n    margin-bottom: 8px;\n  }\n}',b='import "../index.less";\nimport "../_docs.less";\n\nimport {\n  CheckCircleFilled,\n  InfoCircleFilled,\n  ExclamationCircleFilled,\n  CloseCircleFilled,\n  CloseOutlined,\n} from "@ant-design/icons";\n\nexport default () => {\n  return (\n    <>\n      <div className="ant-alert ant-alert-success">\n        <CheckCircleFilled className="ant-alert-icon" />\n        \u8fd9\u662f\u4e00\u6761\u6210\u529f\u7684\u6d88\u606f\u63d0\u793a\n      </div>\n      <div className="ant-alert ant-alert-info">\n        <InfoCircleFilled className="ant-alert-icon" /> \u8fd9\u662f\u4e00\u6761\u666e\u901a\u7684\u6d88\u606f\u63d0\u793a\n      </div>\n      <div className="ant-alert ant-alert-warning">\n        <ExclamationCircleFilled className="ant-alert-icon" />\n        <div className="ant-alert-content">\n          <div className="ant-alert-message">\u8fd9\u662f\u4e00\u6761\u8b66\u793a\u4fe1\u606f</div>\n        </div>\n        <button className="ant-alert-close-icon">\n          <CloseOutlined />\n        </button>\n      </div>\n      <div className="ant-alert ant-alert-error">\n        <CloseCircleFilled className="ant-alert-icon" />\n        \u9ad8\u5371\u64cd\u4f5c/\u51fa\u9519\u4fe1\u606f\u63d0\u793a\n      </div>\n    </>\n  );\n};',m='import "../index.less";\nimport "../_docs.less";\n\nimport UserFilled from "@sensoro-design/icons/UserFilled";\nexport default () => {\n  return (\n    <>\n      <div className="demo-inline">\n        <span\n          className="ant-avatar ant-avatar-circle ant-avatar-icon"\n          style={{\n            width: 64,\n            height: 64,\n            lineHeight: "64px",\n            fontSize: 32,\n          }}\n        >\n          <UserFilled />\n        </span>\n        <span className="ant-avatar ant-avatar-lg ant-avatar-circle ant-avatar-icon">\n          <UserFilled />\n        </span>\n        <span className="ant-avatar ant-avatar-circle ant-avatar-icon">\n          <UserFilled />\n        </span>\n      </div>\n\n      <div className="demo-inline">\n        <span\n          className="ant-avatar ant-avatar-square ant-avatar-icon"\n          style={{\n            width: 64,\n            height: 64,\n            lineHeight: "64px",\n            fontSize: 32,\n          }}\n        >\n          <UserFilled />\n        </span>\n        <span className="ant-avatar ant-avatar-lg ant-avatar-square ant-avatar-icon">\n          <UserFilled />\n        </span>\n        <span className="ant-avatar ant-avatar-square ant-avatar-icon">\n          <UserFilled />\n        </span>\n      </div>\n    </>\n  );\n};',g="@import '../../style/themes/index';\n@import '../../style/mixins/index';\n\n// style dependencies\n// deps-lint-skip: grid\n//@import '../popover/index.less';\n\n@avatar-prefix-cls: ~'@{ant-prefix}-avatar';\n\n.@{avatar-prefix-cls} {\n  .reset-component();\n\n  position: relative;\n  display: inline-block;\n  overflow: hidden;\n  color: @avatar-color;\n  white-space: nowrap;\n  text-align: center;\n  vertical-align: middle;\n  background: @avatar-bg;\n\n  &-image {\n    background: transparent;\n  }\n\n  .@{ant-prefix}-image-img {\n    display: block;\n  }\n\n  .avatar-size(@avatar-size-base, @avatar-font-size-base);\n\n  &-border {\n    border: @avatar-border-width @avatar-border-style @avatar-border-color;\n  }\n\n  &-lg {\n    .avatar-size(@avatar-size-lg, @avatar-font-size-lg);\n  }\n\n  &-sm {\n    .avatar-size(@avatar-size-sm, @avatar-font-size-sm);\n  }\n\n  &-square {\n    border-radius: @avatar-border-radius;\n  }\n\n  & > img {\n    display: block;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n}\n\n.avatar-size(@size, @font-size) {\n  width: @size;\n  height: @size;\n  line-height: @size;\n  border-radius: 50%;\n\n  &-string {\n    position: absolute;\n    left: 50%;\n    transform-origin: 0 center;\n  }\n\n  &.@{avatar-prefix-cls}-icon {\n    font-size: @font-size;\n\n    > .@{iconfont-css-prefix} {\n      margin: 0;\n    }\n  }\n}\n\n@import './group';\n@import './rtl';",h='[class*="__dumi-default-previewer-demo"] {\n  .demo-inline .ant-avatar:not(:last-child) {\n    margin-right: 8px;\n  }\n}',f='import "../index.less";\nimport "../_docs.less";\n\nimport UserFilled from "@sensoro-design/icons/UserFilled";\n\nexport default () => {\n  return (\n    <div className="demo-inline">\n      <span\n        className="ant-avatar ant-avatar-circle ant-avatar-icon"\n        style={{\n          width: 64,\n          height: 64,\n          lineHeight: "64px",\n          fontSize: 32,\n        }}\n      >\n        <UserFilled />\n      </span>\n\n      <span\n        className="ant-avatar ant-avatar-circle ant-avatar-icon"\n        style={{\n          width: 64,\n          height: 64,\n          lineHeight: "64px",\n          fontSize: 32,\n        }}\n      >\n        <img src="https://joeschmoe.io/api/v1/random" />\n      </span>\n    </div>\n  );\n};',v='import "../index.less";\nimport "../_docs.less";\n\nimport UserFilled from "@sensoro-design/icons/UserFilled";\n\nexport default () => {\n  return (\n    <>\n      <div className="ant-avatar-group">\n        <span className="ant-avatar ant-avatar-circle ant-avatar-image">\n          <img src="https://joeschmoe.io/api/v1/random" />\n        </span>\n        <span\n          className="ant-avatar ant-avatar-circle"\n          style={{ backgroundColor: "rgb(245, 106, 0)" }}\n        >\n          <span\n            className="ant-avatar-string"\n            style={{ transform: "scale(1) translateX(-50%)" }}\n          >\n            K\n          </span>\n        </span>\n        <span\n          className="ant-avatar ant-avatar-circle ant-avatar-icon"\n          style={{ backgroundColor: "rgb(135, 208, 104)" }}\n        >\n          U\n        </span>\n        <span\n          className="ant-avatar ant-avatar-circle ant-avatar-icon"\n          style={{ backgroundColor: "rgb(24, 144, 255)" }}\n        >\n          <UserFilled />\n        </span>\n      </div>\n    </>\n  );\n};',x='import "../index.less";\nimport "../_docs.less";\n\nexport default () => {\n  return (\n    <>\n      <button type="button" className="ant-btn ant-btn-primary">\n        \u4e3b\u8981\u6309\u94ae\n      </button>\n      <button type="button" className="ant-btn ant-btn-default">\n        \u9ed8\u8ba4\u6309\u94ae\n      </button>\n      <button type="button" className="ant-btn ant-btn-dashed">\n        \u865a\u6846\u6309\u94ae\n      </button>\n      <button type="button" className="ant-btn ant-btn-link">\n        \u94fe\u63a5\u6309\u94ae\n      </button>\n    </>\n  );\n};',y="@import '../../style/index';\n@import '../../style/mixins/index';\n@import './mixin';\n\n@btn-prefix-cls: ~'@{ant-prefix}-btn';\n\n// for compatible\n@btn-ghost-color: @text-color;\n@btn-ghost-bg: transparent;\n@btn-ghost-border: @border-color-base;\n\n// Button styles\n// -----------------------------\n.@{btn-prefix-cls} {\n  // Fixing https://github.com/ant-design/ant-design/issues/12978\n  // Fixing https://github.com/ant-design/ant-design/issues/20058\n  // Fixing https://github.com/ant-design/ant-design/issues/19972\n  // Fixing https://github.com/ant-design/ant-design/issues/18107\n  // Fixing https://github.com/ant-design/ant-design/issues/13214\n  // It is a render problem of chrome, which is only happened in the codesandbox demo\n  // 0.001px solution works and I don't know why\n  line-height: @btn-line-height;\n  .btn();\n  .btn-default();\n\n  // Fix loading button animation\n  // https://github.com/ant-design/ant-design/issues/24323\n  > span {\n    display: inline-block;\n  }\n\n  &-primary {\n    .btn-primary();\n\n    .@{btn-prefix-cls}-group &:not(:first-child):not(:last-child) {\n      border-right-color: @btn-group-border;\n      border-left-color: @btn-group-border;\n\n      &:disabled {\n        border-color: @btn-default-border;\n      }\n    }\n\n    .@{btn-prefix-cls}-group &:first-child {\n      &:not(:last-child) {\n        border-right-color: @btn-group-border;\n\n        &[disabled] {\n          border-right-color: @btn-default-border;\n        }\n      }\n    }\n\n    .@{btn-prefix-cls}-group &:last-child:not(:first-child),\n    .@{btn-prefix-cls}-group & + & {\n      border-left-color: @btn-group-border;\n\n      &[disabled] {\n        border-left-color: @btn-default-border;\n      }\n    }\n  }\n\n  &-ghost {\n    .btn-ghost();\n  }\n\n  &-dashed {\n    .btn-dashed();\n  }\n\n  // type=\"danger\" will deprecated\n  // use danger instead\n  &-danger {\n    .btn-danger();\n  }\n\n  &-link {\n    .btn-link();\n  }\n\n  &-text {\n    .btn-text();\n  }\n\n  &-dangerous {\n    .btn-danger-default(@error-color, @btn-default-bg, transparent);\n  }\n\n  &-dangerous&-primary {\n    .btn-danger();\n  }\n\n  &-dangerous&-link {\n    .btn-danger-link();\n  }\n\n  &-dangerous&-text {\n    .btn-danger-text();\n  }\n\n  &-icon-only {\n    .btn-square(@btn-prefix-cls);\n    vertical-align: -3px;\n\n    > .@{iconfont-css-prefix} {\n      display: flex;\n      justify-content: center;\n    }\n\n    .@{iconfont-css-prefix}-loading {\n      padding: 0 !important;\n    }\n\n    &.@{btn-prefix-cls}-link {\n      .button-variant-link-icon-only(@btn-link-icon-color, transparent, transparent)\n    }\n  }\n\n  // https://github.com/ant-design/ant-design/issues/32365\n  a&-icon-only {\n    vertical-align: -1px;\n\n    > .@{iconfont-css-prefix} {\n      display: inline;\n    }\n  }\n\n  &-round {\n    .btn-round(@btn-prefix-cls);\n    &.@{btn-prefix-cls}-icon-only {\n      width: auto;\n    }\n  }\n\n  &-circle {\n    .btn-circle(@btn-prefix-cls);\n  }\n\n  &::before {\n    position: absolute;\n    top: -@btn-border-width;\n    right: -@btn-border-width;\n    bottom: -@btn-border-width;\n    left: -@btn-border-width;\n    z-index: 1;\n    display: none;\n    background: @component-background;\n    border-radius: inherit;\n    opacity: 0.35;\n    transition: opacity 0.2s;\n    content: '';\n    pointer-events: none;\n  }\n\n  .@{iconfont-css-prefix} {\n    transition: margin-left 0.3s @ease-in-out;\n\n    // Follow icon blur under windows. Change the render.\n    // https://github.com/ant-design/ant-design/issues/13924\n    &.@{iconfont-css-prefix}-plus,\n    &.@{iconfont-css-prefix}-minus {\n      > svg {\n        shape-rendering: optimizespeed;\n      }\n    }\n  }\n\n  &&-loading {\n    position: relative;\n    cursor: default;\n\n    &::before {\n      display: block;\n    }\n  }\n\n  & > &-loading-icon {\n    transition: width 0.3s @ease-in-out, opacity 0.3s @ease-in-out;\n\n    .@{iconfont-css-prefix} {\n      padding-right: @padding-xs;\n      animation: none;\n      // for smooth button padding transition\n      svg {\n        animation: loadingCircle 1s infinite linear;\n      }\n    }\n  }\n\n  &-group {\n    .btn-group(@btn-prefix-cls);\n  }\n\n  // http://stackoverflow.com/a/21281554/3040605\n  &:focus > span,\n  &:active > span {\n    position: relative;\n  }\n\n  // To ensure that a space will be placed between character and `Icon`.\n  > .@{iconfont-css-prefix} + span,\n  > span + .@{iconfont-css-prefix} {\n    margin-left: @margin-xs;\n  }\n\n  &&-background-ghost {\n    color: @btn-default-ghost-color;\n    border-color: @btn-default-ghost-border;\n\n    &,\n    &:hover,\n    &:active,\n    &:focus {\n      background: @btn-default-ghost-bg;\n    }\n\n    &:hover,\n    &:focus {\n      color: @primary-color-hover;\n      border-color: @primary-color-hover;\n    }\n\n    &:active {\n      color: @primary-color-active;\n      border-color: @primary-color-active;\n    }\n\n    &[disabled] {\n      color: @disabled-color;\n      background: @btn-default-ghost-bg;\n      border-color: @btn-default-border;\n    }\n  }\n\n  &-background-ghost&-primary {\n    .button-variant-ghost(@btn-primary-bg, @btn-primary-bg, @primary-color-hover, @primary-color-active);\n  }\n\n  &-background-ghost&-danger {\n    .button-variant-ghost(@btn-danger-border, @btn-danger-border, @error-color-hover, @error-color-active);\n  }\n\n  &-background-ghost&-dangerous {\n    .button-variant-ghost(@btn-danger-border, @btn-danger-border, @error-color-hover, @error-color-active);\n  }\n\n  &-background-ghost&-dangerous&-link {\n    .button-variant-ghost(@btn-danger-border, transparent, @error-color-hover, @error-color-active);\n  }\n\n  &-two-chinese-chars::first-letter {\n    letter-spacing: 0.34em;\n  }\n\n  &-two-chinese-chars > *:not(.@{iconfont-css-prefix}) {\n    margin-right: -0.34em;\n    letter-spacing: 0.34em;\n  }\n\n  &&-block {\n    width: 100%;\n  }\n\n  // https://github.com/ant-design/ant-design/issues/12681\n  // same method as Select\n  &:empty {\n    display: inline-block;\n    width: 0;\n    visibility: hidden;\n    content: '\\a0';\n  }\n}\n\na.@{btn-prefix-cls} {\n  // Fixing https://github.com/ant-design/ant-design/issues/12978\n  // https://github.com/ant-design/ant-design/issues/29978\n  // It is a render problem of chrome, which is only happened in the codesandbox demo\n  // 0.1px for padding-top solution works and I don't why\n  padding-top: 0.01px !important;\n  line-height: @btn-height-base - 2px;\n\n  &-disabled {\n    .btn-href-disabled();\n  }\n\n  &-lg {\n    line-height: @btn-height-lg - 2px;\n  }\n\n  &-sm {\n    line-height: @btn-height-sm - 2px;\n  }\n}\n\n@import './rtl';",w='[class*="__dumi-default-previewer-demo"] {\n  .ant-btn:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .demo-inline {\n    margin-bottom: 8px;\n  }\n}',O='import "../index.less";\nimport "../_docs.less";\n\nimport { PlusOutlined, FormOutlined } from "@ant-design/icons";\n\nexport default () => {\n  return (\n    <>\n      <button type="button" className="ant-btn ant-btn-primary">\n        <PlusOutlined />\n        <span>\u7f16\u8f91</span>\n      </button>\n      <button type="button" className="ant-btn ant-btn-default">\n        <PlusOutlined />\n        <span>\u7f16\u8f91</span>\n      </button>\n      <button\n        type="button"\n        className="ant-btn ant-btn-default ant-btn-icon-only"\n      >\n        <PlusOutlined />\n      </button>\n      <button type="button" className="ant-btn ant-btn-link ant-btn-icon-only">\n        <FormOutlined />\n      </button>\n    </>\n  );\n};',k='import "../index.less";\nimport "../_docs.less";\n\nimport { LoadingOutlined } from "@ant-design/icons";\n\nexport default () => {\n  return (\n    <>\n      <button type="button" className="ant-btn ant-btn-primary ant-btn-loading">\n        <LoadingOutlined />\n        <span>\u4e3b\u8981\u6309\u94ae</span>\n      </button>\n      <button type="button" className="ant-btn ant-btn-default">\n        <LoadingOutlined />\n        <span>\u57fa\u7840\u6309\u94ae</span>\n      </button>\n    </>\n  );\n};',N='import "../index.less";\nimport "../_docs.less";\n\nexport default () => {\n  return (\n    <>\n      <button\n        type="button"\n        className="ant-btn ant-btn-primary ant-btn-dangerous"\n      >\n        <span>\u5220\u9664\u9879\u76ee</span>\n      </button>\n      <button\n        type="button"\n        className="ant-btn ant-btn-default ant-btn-dangerous"\n      >\n        \u5220\u9664\n      </button>\n      <button type="button" className="ant-btn ant-btn-link ant-btn-dangerous">\n        \u5220\u9664\n      </button>\n    </>\n  );\n};',_='import "../index.less";\nimport "../_docs.less";\n\nimport { PlusOutlined, FormOutlined } from "@ant-design/icons";\n\nexport default () => {\n  return (\n    <div>\n      <div className="demo-inline">\n        <button type="button" className="ant-btn ant-btn-lg ant-btn-primary">\n          <PlusOutlined />\n          <span>\u5927\u6309\u94ae</span>\n        </button>\n        <button type="button" className="ant-btn ant-btn-lg ant-btn-default">\n          <PlusOutlined />\n          <span>\u5927\u6309\u94ae</span>\n        </button>\n        <button\n          type="button"\n          className="ant-btn ant-btn-lg ant-btn-default ant-btn-icon-only"\n        >\n          <PlusOutlined />\n        </button>\n        <button\n          type="button"\n          className="ant-btn ant-btn-lg ant-btn-link ant-btn-icon-only"\n        >\n          <FormOutlined />\n        </button>\n      </div>\n      <div className="demo-inline">\n        <button type="button" className="ant-btn ant-btn-primary">\n          <PlusOutlined />\n          <span>\u5927\u6309\u94ae</span>\n        </button>\n        <button type="button" className="ant-btn ant-btn-default">\n          <PlusOutlined />\n          <span>\u5927\u6309\u94ae</span>\n        </button>\n        <button\n          type="button"\n          className="ant-btn ant-btn-default ant-btn-icon-only"\n        >\n          <PlusOutlined />\n        </button>\n        <button\n          type="button"\n          className="ant-btn ant-btn-link ant-btn-icon-only"\n        >\n          <FormOutlined />\n        </button>\n      </div>\n      <div className="demo-inline">\n        <button type="button" className="ant-btn ant-btn-sm ant-btn-primary">\n          <PlusOutlined />\n          <span>\u5927\u6309\u94ae</span>\n        </button>\n        <button type="button" className="ant-btn ant-btn-sm ant-btn-default">\n          <PlusOutlined />\n          <span>\u5927\u6309\u94ae</span>\n        </button>\n        <button\n          type="button"\n          className="ant-btn ant-btn-sm ant-btn-default ant-btn-icon-only"\n        >\n          <PlusOutlined />\n        </button>\n        <button\n          type="button"\n          className="ant-btn ant-btn-sm ant-btn-link ant-btn-icon-only"\n        >\n          <FormOutlined />\n        </button>\n      </div>\n    </div>\n  );\n};',j={"alert-basic":{component:Object(c["dynamic"])({loader:function(){var n=Object(l["a"])(Object(s["a"])().mark((function n(){return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(12),e.e(6)]).then(e.bind(null,"yxAD"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function t(){return n.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:d},"index.less":{import:"../index.less",content:p},"_docs.less":{import:"../_docs.less",content:u}},dependencies:{},identifier:"alert-basic"}},"alert-icon":{component:Object(c["dynamic"])({loader:function(){var n=Object(l["a"])(Object(s["a"])().mark((function n(){return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(12),e.e(6)]).then(e.bind(null,"/zFI"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function t(){return n.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:b},"index.less":{import:"../index.less",content:p},"_docs.less":{import:"../_docs.less",content:u}},dependencies:{"@ant-design/icons":{version:"4.7.0"},react:{version:">=16.0.0"},"react-dom":{version:">=16.0.0"}},identifier:"alert-icon"}},"avatar-basic":{component:Object(c["dynamic"])({loader:function(){var n=Object(l["a"])(Object(s["a"])().mark((function n(){return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(12),e.e(6)]).then(e.bind(null,"A/u0"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function t(){return n.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:m},"index.less":{import:"../index.less",content:g},"_docs.less":{import:"../_docs.less",content:h}},dependencies:{"@sensoro-design/icons":{version:"1.43.0"},react:{version:">=16.0.0"},"react-dom":{version:">=16.0.0"}},identifier:"avatar-basic"}},"avatar-type":{component:Object(c["dynamic"])({loader:function(){var n=Object(l["a"])(Object(s["a"])().mark((function n(){return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(12),e.e(6)]).then(e.bind(null,"w0Yd"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function t(){return n.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:f},"index.less":{import:"../index.less",content:g},"_docs.less":{import:"../_docs.less",content:h}},dependencies:{"@sensoro-design/icons":{version:"1.43.0"},react:{version:">=16.0.0"},"react-dom":{version:">=16.0.0"}},identifier:"avatar-type"}},"avatar-group":{component:Object(c["dynamic"])({loader:function(){var n=Object(l["a"])(Object(s["a"])().mark((function n(){return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(12),e.e(6)]).then(e.bind(null,"KCZG"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function t(){return n.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:v},"index.less":{import:"../index.less",content:g},"_docs.less":{import:"../_docs.less",content:h}},dependencies:{"@sensoro-design/icons":{version:"1.43.0"},react:{version:">=16.0.0"},"react-dom":{version:">=16.0.0"}},identifier:"avatar-group"}},"button-basic":{component:Object(c["dynamic"])({loader:function(){var n=Object(l["a"])(Object(s["a"])().mark((function n(){return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(12),e.e(6)]).then(e.bind(null,"tQyN"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function t(){return n.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:x},"index.less":{import:"../index.less",content:y},"_docs.less":{import:"../_docs.less",content:w}},dependencies:{},identifier:"button-basic"}},"button-icon":{component:Object(c["dynamic"])({loader:function(){var n=Object(l["a"])(Object(s["a"])().mark((function n(){return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(12),e.e(6)]).then(e.bind(null,"5xqa"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function t(){return n.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:O},"index.less":{import:"../index.less",content:y},"_docs.less":{import:"../_docs.less",content:w}},dependencies:{"@ant-design/icons":{version:"4.7.0"},react:{version:">=16.0.0"},"react-dom":{version:">=16.0.0"}},identifier:"button-icon"}},"button-loading":{component:Object(c["dynamic"])({loader:function(){var n=Object(l["a"])(Object(s["a"])().mark((function n(){return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(12),e.e(6)]).then(e.bind(null,"/bLq"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function t(){return n.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:k},"index.less":{import:"../index.less",content:y},"_docs.less":{import:"../_docs.less",content:w}},dependencies:{"@ant-design/icons":{version:"4.7.0"},react:{version:">=16.0.0"},"react-dom":{version:">=16.0.0"}},identifier:"button-loading"}},"button-danger":{component:Object(c["dynamic"])({loader:function(){var n=Object(l["a"])(Object(s["a"])().mark((function n(){return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(12),e.e(6)]).then(e.bind(null,"mgzv"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function t(){return n.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:N},"index.less":{import:"../index.less",content:y},"_docs.less":{import:"../_docs.less",content:w}},dependencies:{},identifier:"button-danger"}},"button-size":{component:Object(c["dynamic"])({loader:function(){var n=Object(l["a"])(Object(s["a"])().mark((function n(){return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(12),e.e(6)]).then(e.bind(null,"8pWm"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function t(){return n.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:_},"index.less":{import:"../index.less",content:y},"_docs.less":{import:"../_docs.less",content:w}},dependencies:{"@ant-design/icons":{version:"4.7.0"},react:{version:">=16.0.0"},"react-dom":{version:">=16.0.0"}},identifier:"button-size"}}},F=e("x2v5"),z=e("CdDN"),P=e.n(z);t["default"]=n=>o.a.createElement(P.a,Object(a["a"])({},n,{config:i,demos:j,apis:F}))},q3YX:function(n){n.exports=JSON.parse('{"menus":{"en-US":{"/components":[{"title":"\u901a\u7528","meta":{"order":0,"__fallback":true},"children":[{"path":"/components/button","title":"Button \u6309\u94ae","meta":{"order":0}}]},{"title":"\u6570\u636e\u5c55\u793a","meta":{"order":0,"__fallback":true},"children":[{"path":"/components/avatar","title":"Avatar \u5934\u50cf","meta":{"order":0}}]},{"title":"\u53cd\u9988","meta":{"order":0,"__fallback":true},"children":[{"path":"/components/alert","title":"Alert \u8b66\u544a","meta":{"order":0}}]}],"/docs":[{"title":"\u6587\u6863","path":"/docs/","meta":{},"children":[{"path":"/docs/getting-started","title":"\u5feb\u901f\u5f00\u59cb","meta":{"order":2}},{"path":"/docs/faq","title":"FAQ","meta":{"order":3}}]}],"*":[{"path":"/","title":"Sensoro Design Styles","meta":{}}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u6587\u6863","path":"/docs"},{"title":"\u7ec4\u4ef6","path":"/components"},{"title":"GitHub","path":"https://github.com/sensoro-design/ant-design-style"}]},"title":"Sensoro Design Styles","logo":"https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/sensoro-design.svg","mode":"site","repository":{"url":"","branch":"master"},"theme":{}}')},x2v5:function(n){n.exports=JSON.parse("{}")}}]);