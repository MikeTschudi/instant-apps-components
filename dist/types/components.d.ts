/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
import { InstantAppsPopovers } from "./components/instant-apps-popovers/instant-apps-popovers";
export namespace Components {
    interface InstantAppsHeader {
        "backgroundColor": string;
        "label": string;
        "logoImage": string;
        "logoImageAltText": string;
        "logoLink": string;
        "textColor": string;
        "titleText": string;
    }
    interface InstantAppsPopover {
        "content": string;
        "disableAction": boolean;
        "index": number;
        "intlOf": string;
        "intlPopoverAction": string;
        "mediaSrc": string;
        "pagination": boolean;
        "parent": InstantAppsPopovers;
        "placement": string;
        "popoverAction": Function;
        "popoverTitle": string;
        "refId": string;
        "referenceElement": string | HTMLElement;
        "subtitle": string;
    }
    interface InstantAppsPopovers {
        "beforeOpen": () => Promise<void>;
        "beginTour": () => Promise<void>;
        "close": (key: string) => Promise<void>;
        "endTour": () => Promise<void>;
        "inTour": boolean;
        "instantAppsPopovers": Map<string, HTMLInstantAppsPopoverElement>;
        "open": (key: string) => Promise<void>;
    }
    interface InstantAppsSocialShare {
        "defaultUrlParams": { center?: boolean; level?: boolean; viewpoint?: boolean; selectedFeature?: boolean; hiddenLayers?: boolean } | null;
        "displayTipText": boolean;
        "embed": boolean;
        "iframeInnerText": string;
        "mode": 'popover' | 'inline';
        "popoverButtonIconScale": 's' | 'm' | 'l';
        "scale": 's' | 'm' | 'l';
        "shareButtonColor": 'inverse' | 'neutral';
        "shareIconsLayout": 'vertical' | 'horizontal';
        "shareText": string;
        "shareUrl": string;
        "socialMedia": boolean;
        "view": __esri.MapView | __esri.SceneView;
    }
}
declare global {
    interface HTMLInstantAppsHeaderElement extends Components.InstantAppsHeader, HTMLStencilElement {
    }
    var HTMLInstantAppsHeaderElement: {
        prototype: HTMLInstantAppsHeaderElement;
        new (): HTMLInstantAppsHeaderElement;
    };
    interface HTMLInstantAppsPopoverElement extends Components.InstantAppsPopover, HTMLStencilElement {
    }
    var HTMLInstantAppsPopoverElement: {
        prototype: HTMLInstantAppsPopoverElement;
        new (): HTMLInstantAppsPopoverElement;
    };
    interface HTMLInstantAppsPopoversElement extends Components.InstantAppsPopovers, HTMLStencilElement {
    }
    var HTMLInstantAppsPopoversElement: {
        prototype: HTMLInstantAppsPopoversElement;
        new (): HTMLInstantAppsPopoversElement;
    };
    interface HTMLInstantAppsSocialShareElement extends Components.InstantAppsSocialShare, HTMLStencilElement {
    }
    var HTMLInstantAppsSocialShareElement: {
        prototype: HTMLInstantAppsSocialShareElement;
        new (): HTMLInstantAppsSocialShareElement;
    };
    interface HTMLElementTagNameMap {
        "instant-apps-header": HTMLInstantAppsHeaderElement;
        "instant-apps-popover": HTMLInstantAppsPopoverElement;
        "instant-apps-popovers": HTMLInstantAppsPopoversElement;
        "instant-apps-social-share": HTMLInstantAppsSocialShareElement;
    }
}
declare namespace LocalJSX {
    interface InstantAppsHeader {
        "backgroundColor"?: string;
        "label"?: string;
        "logoImage"?: string;
        "logoImageAltText"?: string;
        "logoLink"?: string;
        "textColor"?: string;
        "titleText"?: string;
    }
    interface InstantAppsPopover {
        "content"?: string;
        "disableAction"?: boolean;
        "index"?: number;
        "intlOf"?: string;
        "intlPopoverAction"?: string;
        "mediaSrc"?: string;
        "pagination"?: boolean;
        "parent"?: InstantAppsPopovers;
        "placement"?: string;
        "popoverAction"?: Function;
        "popoverTitle"?: string;
        "refId"?: string;
        "referenceElement"?: string | HTMLElement;
        "subtitle"?: string;
    }
    interface InstantAppsPopovers {
        "beforeOpen"?: () => Promise<void>;
        "inTour"?: boolean;
        "instantAppsPopovers"?: Map<string, HTMLInstantAppsPopoverElement>;
    }
    interface InstantAppsSocialShare {
        "defaultUrlParams"?: { center?: boolean; level?: boolean; viewpoint?: boolean; selectedFeature?: boolean; hiddenLayers?: boolean } | null;
        "displayTipText"?: boolean;
        "embed"?: boolean;
        "iframeInnerText"?: string;
        "mode"?: 'popover' | 'inline';
        "popoverButtonIconScale"?: 's' | 'm' | 'l';
        "scale"?: 's' | 'm' | 'l';
        "shareButtonColor"?: 'inverse' | 'neutral';
        "shareIconsLayout"?: 'vertical' | 'horizontal';
        "shareText"?: string;
        "shareUrl"?: string;
        "socialMedia"?: boolean;
        "view"?: __esri.MapView | __esri.SceneView;
    }
    interface IntrinsicElements {
        "instant-apps-header": InstantAppsHeader;
        "instant-apps-popover": InstantAppsPopover;
        "instant-apps-popovers": InstantAppsPopovers;
        "instant-apps-social-share": InstantAppsSocialShare;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "instant-apps-header": LocalJSX.InstantAppsHeader & JSXBase.HTMLAttributes<HTMLInstantAppsHeaderElement>;
            "instant-apps-popover": LocalJSX.InstantAppsPopover & JSXBase.HTMLAttributes<HTMLInstantAppsPopoverElement>;
            "instant-apps-popovers": LocalJSX.InstantAppsPopovers & JSXBase.HTMLAttributes<HTMLInstantAppsPopoversElement>;
            "instant-apps-social-share": LocalJSX.InstantAppsSocialShare & JSXBase.HTMLAttributes<HTMLInstantAppsSocialShareElement>;
        }
    }
}
