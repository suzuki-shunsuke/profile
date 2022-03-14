"use strict";(self.webpackChunkprofile=self.webpackChunkprofile||[]).push([[918],{5903:function(e,t,a){a.r(t),a.d(t,{default:function(){return se}});var n=a(7294),l=a(6010),r=a(7462),i=a(5999),s=a(9960);function c(e){var t=e.permalink,a=e.title,l=e.subLabel;return n.createElement(s.Z,{className:"pagination-nav__link",to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}function o(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(c,(0,r.Z)({},t,{subLabel:n.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(c,(0,r.Z)({},a,{subLabel:n.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}var d=a(2263),m=a(5551),u=a(3725);var v={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){var t=v[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(s.Z,{to:a,onClick:l},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function E(e){var t,a=e.className,r=e.versionMetadata,i=(0,d.Z)().siteConfig.title,s=(0,m.gA)({failfast:!0}).pluginId,c=(0,u.J)(s).savePreferredVersionName,o=(0,m.Jo)(s),v=o.latestDocSuggestion,E=o.latestVersionSuggestion,g=null!=v?v:(t=E).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(a,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(b,{siteTitle:i,versionMetadata:r})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:E.label,to:g.path,onClick:function(){return c(E.name)}})))}function g(e){var t=e.className,a=(0,u.E6)();return a.banner?n.createElement(E,{className:t,versionMetadata:a}):null}function p(e){var t=e.className,a=(0,u.E6)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,u.kM.docs.docVersionBadge,"badge badge--secondary")},n.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}var f=a(1217);function N(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function k(e){var t=e.lastUpdatedBy;return n.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function _(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:u.kM.common.lastUpdated},n.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(N,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(k,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var L=a(3366),Z="iconEdit_dcUD",U=["className"];function C(e){var t=e.className,a=(0,L.Z)(e,U);return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(Z,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function T(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(C,null),n.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var y="tag_hD8n",M="tagRegular_D6E_",w="tagWithCount_i0QQ";function A(e){var t,a=e.permalink,r=e.name,i=e.count;return n.createElement(s.Z,{href:a,className:(0,l.Z)(y,(t={},t[M]=!i,t[w]=i,t))},r,i&&n.createElement("span",null,i))}var x="tags_XVD_",H="tag_JSN8";function B(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(x,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:H},n.createElement(A,{name:t,permalink:a}))}))))}var D="lastUpdated_foO9";function V(e){return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(B,e)))}function I(e){var t=e.editUrl,a=e.lastUpdatedAt,r=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(T,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",D)},(a||r)&&n.createElement(_,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:r})))}function S(e){var t=e.content.metadata,a=t.editUrl,r=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,s=t.lastUpdatedBy,c=t.tags,o=c.length>0,d=!!(a||r||s);return o||d?n.createElement("footer",{className:(0,l.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},o&&n.createElement(V,{tags:c}),d&&n.createElement(I,{editUrl:a,lastUpdatedAt:r,lastUpdatedBy:s,formattedLastUpdatedAt:i})):null}var O=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function F(e){var t=e.toc,a=e.className,l=e.linkClassName,r=e.isChild;return t.length?n.createElement("ul",{className:r?void 0:a},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(F,{isChild:!0,toc:e.children,className:a,linkClassName:l}))}))):null}function R(e){var t=e.toc,a=e.className,l=void 0===a?"table-of-contents table-of-contents__left-border":a,i=e.linkClassName,s=void 0===i?"table-of-contents__link":i,c=e.linkActiveClassName,o=void 0===c?void 0:c,d=e.minHeadingLevel,m=e.maxHeadingLevel,v=(0,L.Z)(e,O),b=(0,u.LU)(),h=null!=d?d:b.tableOfContents.minHeadingLevel,E=null!=m?m:b.tableOfContents.maxHeadingLevel,g=(0,u.b9)({toc:t,minHeadingLevel:h,maxHeadingLevel:E}),p=(0,n.useMemo)((function(){if(s&&o)return{linkClassName:s,linkActiveClassName:o,minHeadingLevel:h,maxHeadingLevel:E}}),[s,o,h,E]);return(0,u.Si)(p),n.createElement(F,(0,r.Z)({toc:g,className:l,linkClassName:s},v))}var z="tableOfContents_cNA8",P=["className"];function q(e){var t=e.className,a=(0,L.Z)(e,P);return n.createElement("div",{className:(0,l.Z)(z,"thin-scrollbar",t)},n.createElement(R,(0,r.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}var J="tocCollapsible_jdIR",Q="tocCollapsibleButton_Fzxq",W="tocCollapsibleContent_MpvI",X="tocCollapsibleExpanded_laf4";function j(e){var t,a=e.toc,r=e.className,s=e.minHeadingLevel,c=e.maxHeadingLevel,o=(0,u.uR)({initialState:!0}),d=o.collapsed,m=o.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(J,(t={},t[X]=!d,t),r)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",Q),onClick:m},n.createElement(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.zF,{lazy:!0,className:W,collapsed:d},n.createElement(R,{toc:a,minHeadingLevel:s,maxHeadingLevel:c})))}var G=a(9649),K="docItemContainer_vinB",Y="docItemCol_DM6M",$="tocMobile_TmEX",ee="breadcrumbsContainer_Xlws",te="breadcrumbsItemLink_e5ie",ae=a(4996);function ne(e){var t=e.children,a=e.href,r=(0,l.Z)("breadcrumbs__link",te);return a?n.createElement(s.Z,{className:r,href:a},t):n.createElement("span",{className:r},t)}function le(e){var t=e.children,a=e.active;return n.createElement("li",{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})},t)}function re(){var e=(0,ae.Z)("/");return n.createElement(le,null,n.createElement(ne,{href:e},"\ud83c\udfe0"))}function ie(){var e=(0,u.s1)(),t=(0,u.Ns)();return e?n.createElement("nav",{className:(0,l.Z)(u.kM.docs.docBreadcrumbs,ee),"aria-label":"breadcrumbs"},n.createElement("ul",{className:"breadcrumbs"},t&&n.createElement(re,null),e.map((function(t,a){return n.createElement(le,{key:a,active:a===e.length-1},n.createElement(ne,{href:t.href},t.label))})))):null}function se(e){var t,a,r=e.content,i=r.metadata,s=r.frontMatter,c=r.assets,d=s.keywords,m=s.hide_title,v=s.hide_table_of_contents,b=s.toc_min_heading_level,h=s.toc_max_heading_level,E=i.description,N=i.title,k=null!=(t=c.image)?t:s.image,_=!m&&void 0===r.contentTitle,L=(0,u.iP)(),Z=!v&&r.toc&&r.toc.length>0,U=Z&&("desktop"===L||"ssr"===L);return n.createElement(n.Fragment,null,n.createElement(f.Z,{title:N,description:E,keywords:d,image:k}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",(a={},a[Y]=!v,a))},n.createElement(g,null),n.createElement("div",{className:K},n.createElement("article",null,n.createElement(ie,null),n.createElement(p,null),Z&&n.createElement(j,{toc:r.toc,minHeadingLevel:b,maxHeadingLevel:h,className:(0,l.Z)(u.kM.docs.docTocMobile,$)}),n.createElement("div",{className:(0,l.Z)(u.kM.docs.docMarkdown,"markdown")},_&&n.createElement("header",null,n.createElement(G.Z,{as:"h1"},N)),n.createElement(r,null)),n.createElement(S,e)),n.createElement(o,{previous:i.previous,next:i.next}))),U&&n.createElement("div",{className:"col col--3"},n.createElement(q,{toc:r.toc,minHeadingLevel:b,maxHeadingLevel:h,className:u.kM.docs.docTocDesktop}))))}},9649:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(7462),l=a(3366),r=a(7294),i=a(6010),s=a(5999),c=a(3725),o="anchorWithStickyNavbar_mojV",d="anchorWithHideOnScrollNavbar_R0VQ",m=["as","id"],u=["as"];function v(e){var t,a=e.as,u=e.id,v=(0,l.Z)(e,m),b=(0,c.LU)().navbar.hideOnScroll;return u?r.createElement(a,(0,n.Z)({},v,{className:(0,i.Z)("anchor",(t={},t[d]=b,t[o]=!b,t)),id:u}),v.children,r.createElement("a",{className:"hash-link",href:"#"+u,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(a,v)}function b(e){var t=e.as,a=(0,l.Z)(e,u);return"h1"===t?r.createElement("h1",(0,n.Z)({},a,{id:void 0}),a.children):r.createElement(v,(0,n.Z)({as:t},a))}}}]);