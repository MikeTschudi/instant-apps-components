/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
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
    interface InstantAppsSocialShare {
        "defaultUrlParams": { center?: boolean; level?: boolean; viewpoint?: boolean; selectedFeature?: boolean; hiddenLayers?: boolean } | null;
        "displayTipText": boolean;
        "embed": boolean;
        "iframeInnerText": string;
        "mode": 'popover' | 'inline';
        "scale": 's' | 'm' | 'l';
        "shareButtonColor": 'inverse' | 'neutral';
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
    interface HTMLInstantAppsSocialShareElement extends Components.InstantAppsSocialShare, HTMLStencilElement {
    }
    var HTMLInstantAppsSocialShareElement: {
        prototype: HTMLInstantAppsSocialShareElement;
        new (): HTMLInstantAppsSocialShareElement;
    };
    interface HTMLElementTagNameMap {
        "instant-apps-header": HTMLInstantAppsHeaderElement;
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
    interface InstantAppsSocialShare {
        "defaultUrlParams"?: { center?: boolean; level?: boolean; viewpoint?: boolean; selectedFeature?: boolean; hiddenLayers?: boolean } | null;
        "displayTipText"?: boolean;
        "embed"?: boolean;
        "iframeInnerText"?: string;
        "mode"?: 'popover' | 'inline';
        "scale"?: 's' | 'm' | 'l';
        "shareButtonColor"?: 'inverse' | 'neutral';
        "shareText"?: string;
        "shareUrl"?: string;
        "socialMedia"?: boolean;
        "view"?: __esri.MapView | __esri.SceneView;
    }
    interface IntrinsicElements {
        "instant-apps-header": InstantAppsHeader;
        "instant-apps-social-share": InstantAppsSocialShare;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "instant-apps-header": LocalJSX.InstantAppsHeader & JSXBase.HTMLAttributes<HTMLInstantAppsHeaderElement>;
            "instant-apps-social-share": LocalJSX.InstantAppsSocialShare & JSXBase.HTMLAttributes<HTMLInstantAppsSocialShareElement>;
        }
    }
}
