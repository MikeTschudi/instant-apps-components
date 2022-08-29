/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { InstantAppsPopovers } from "./components/instant-apps-popovers/instant-apps-popovers";
import { PopperPlacement } from "@esri/calcite-components/dist/types/utils/popper";
export namespace Components {
    interface InstantAppsHeader {
        /**
          * Background color to display in header - accepts a hexidecimal value i.e. `#000000`.
         */
        "backgroundColor": string;
        /**
          * Image URL for logo. Displays at the start of the header.
         */
        "logoImage": string;
        /**
          * Alternate text for header logo.
         */
        "logoImageAltText": string;
        /**
          * Logo URL to link out to another page.
         */
        "logoLink": string;
        /**
          * Text color to display in header - accepts a hexidecimal value i.e. `#FFFFFF`.
         */
        "textColor": string;
        /**
          * Main text to display in header.
         */
        "titleText": string;
    }
    interface InstantAppsInteractiveLegend {
        /**
          * Reference to Map View or Scene View
         */
        "view": __esri.MapView;
    }
    interface InstantAppsInteractiveLegendClassic {
        "headingLevel": number;
        "legendvm": __esri.LegendViewModel;
        "messages": any;
        "type": 'classic';
    }
    interface InstantAppsInteractiveLegendRelationship {
        "effectlist": any;
        "element": any;
        "opacity": number;
        "relationshipElementId": string;
    }
    interface InstantAppsPopover {
        "content": string;
        "disableAction": boolean;
        "imgAlt": string;
        "imgSrc": string;
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
        /**
          * Configure the default URL parameters that are appended to the generated share URL.
         */
        "defaultUrlParams": { center?: boolean; level?: boolean; viewpoint?: boolean; selectedFeature?: boolean; hiddenLayers?: boolean } | null;
        /**
          * Show/hide the tip text below the share options.
         */
        "displayTipText": boolean;
        /**
          * Show/hide the embed UI.
         */
        "embed": boolean;
        /**
          * Text to nest in embed iframe code.
         */
        "iframeInnerText": string;
        /**
          * Configures the placement of the success message popover for the 'Copy Link' button. See options here: https://github.com/Esri/calcite-components/blob/v1.0.0-beta.83/src/utils/popper.ts#L34
         */
        "inlineSuccessPopoverPlacement": PopperPlacement;
        /**
          * Renders tool as a popover with a trigger button, or inline to place in a custom container.
         */
        "mode": 'popover' | 'inline';
        /**
          * Adjusts the scale of the popover button icon.
         */
        "popoverButtonIconScale": 's' | 'm' | 'l';
        /**
          * Adjusts the scale of the component.
         */
        "scale": 's' | 'm' | 'l';
        "shareButtonColor": 'inverse' | 'neutral';
        /**
          * Display the share icons in a vertical or horizontal layout.
         */
        "shareIconsLayout": 'vertical' | 'horizontal';
        "shareText": string;
        /**
          * Generated share URL. Use this property to append custom URL parameters if needed.
         */
        "shareUrl": string;
        /**
          * Show/hide social media icons.
         */
        "socialMedia": boolean;
        /**
          * MapView or SceneView to reference when URL parameter values are generated, i.e. center, level, viewpoint, etc.
         */
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
    interface HTMLInstantAppsInteractiveLegendElement extends Components.InstantAppsInteractiveLegend, HTMLStencilElement {
    }
    var HTMLInstantAppsInteractiveLegendElement: {
        prototype: HTMLInstantAppsInteractiveLegendElement;
        new (): HTMLInstantAppsInteractiveLegendElement;
    };
    interface HTMLInstantAppsInteractiveLegendClassicElement extends Components.InstantAppsInteractiveLegendClassic, HTMLStencilElement {
    }
    var HTMLInstantAppsInteractiveLegendClassicElement: {
        prototype: HTMLInstantAppsInteractiveLegendClassicElement;
        new (): HTMLInstantAppsInteractiveLegendClassicElement;
    };
    interface HTMLInstantAppsInteractiveLegendRelationshipElement extends Components.InstantAppsInteractiveLegendRelationship, HTMLStencilElement {
    }
    var HTMLInstantAppsInteractiveLegendRelationshipElement: {
        prototype: HTMLInstantAppsInteractiveLegendRelationshipElement;
        new (): HTMLInstantAppsInteractiveLegendRelationshipElement;
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
        "instant-apps-interactive-legend": HTMLInstantAppsInteractiveLegendElement;
        "instant-apps-interactive-legend-classic": HTMLInstantAppsInteractiveLegendClassicElement;
        "instant-apps-interactive-legend-relationship": HTMLInstantAppsInteractiveLegendRelationshipElement;
        "instant-apps-popover": HTMLInstantAppsPopoverElement;
        "instant-apps-popovers": HTMLInstantAppsPopoversElement;
        "instant-apps-social-share": HTMLInstantAppsSocialShareElement;
    }
}
declare namespace LocalJSX {
    interface InstantAppsHeader {
        /**
          * Background color to display in header - accepts a hexidecimal value i.e. `#000000`.
         */
        "backgroundColor"?: string;
        /**
          * Image URL for logo. Displays at the start of the header.
         */
        "logoImage"?: string;
        /**
          * Alternate text for header logo.
         */
        "logoImageAltText"?: string;
        /**
          * Logo URL to link out to another page.
         */
        "logoLink"?: string;
        /**
          * Text color to display in header - accepts a hexidecimal value i.e. `#FFFFFF`.
         */
        "textColor"?: string;
        /**
          * Main text to display in header.
         */
        "titleText"?: string;
    }
    interface InstantAppsInteractiveLegend {
        /**
          * Reference to Map View or Scene View
         */
        "view"?: __esri.MapView;
    }
    interface InstantAppsInteractiveLegendClassic {
        "headingLevel"?: number;
        "legendvm"?: __esri.LegendViewModel;
        "messages"?: any;
        "type"?: 'classic';
    }
    interface InstantAppsInteractiveLegendRelationship {
        "effectlist"?: any;
        "element"?: any;
        "opacity"?: number;
        "relationshipElementId"?: string;
    }
    interface InstantAppsPopover {
        "content"?: string;
        "disableAction"?: boolean;
        "imgAlt"?: string;
        "imgSrc"?: string;
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
        /**
          * Configure the default URL parameters that are appended to the generated share URL.
         */
        "defaultUrlParams"?: { center?: boolean; level?: boolean; viewpoint?: boolean; selectedFeature?: boolean; hiddenLayers?: boolean } | null;
        /**
          * Show/hide the tip text below the share options.
         */
        "displayTipText"?: boolean;
        /**
          * Show/hide the embed UI.
         */
        "embed"?: boolean;
        /**
          * Text to nest in embed iframe code.
         */
        "iframeInnerText"?: string;
        /**
          * Configures the placement of the success message popover for the 'Copy Link' button. See options here: https://github.com/Esri/calcite-components/blob/v1.0.0-beta.83/src/utils/popper.ts#L34
         */
        "inlineSuccessPopoverPlacement"?: PopperPlacement;
        /**
          * Renders tool as a popover with a trigger button, or inline to place in a custom container.
         */
        "mode"?: 'popover' | 'inline';
        /**
          * Adjusts the scale of the popover button icon.
         */
        "popoverButtonIconScale"?: 's' | 'm' | 'l';
        /**
          * Adjusts the scale of the component.
         */
        "scale"?: 's' | 'm' | 'l';
        "shareButtonColor"?: 'inverse' | 'neutral';
        /**
          * Display the share icons in a vertical or horizontal layout.
         */
        "shareIconsLayout"?: 'vertical' | 'horizontal';
        "shareText"?: string;
        /**
          * Generated share URL. Use this property to append custom URL parameters if needed.
         */
        "shareUrl"?: string;
        /**
          * Show/hide social media icons.
         */
        "socialMedia"?: boolean;
        /**
          * MapView or SceneView to reference when URL parameter values are generated, i.e. center, level, viewpoint, etc.
         */
        "view"?: __esri.MapView | __esri.SceneView;
    }
    interface IntrinsicElements {
        "instant-apps-header": InstantAppsHeader;
        "instant-apps-interactive-legend": InstantAppsInteractiveLegend;
        "instant-apps-interactive-legend-classic": InstantAppsInteractiveLegendClassic;
        "instant-apps-interactive-legend-relationship": InstantAppsInteractiveLegendRelationship;
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
            "instant-apps-interactive-legend": LocalJSX.InstantAppsInteractiveLegend & JSXBase.HTMLAttributes<HTMLInstantAppsInteractiveLegendElement>;
            "instant-apps-interactive-legend-classic": LocalJSX.InstantAppsInteractiveLegendClassic & JSXBase.HTMLAttributes<HTMLInstantAppsInteractiveLegendClassicElement>;
            "instant-apps-interactive-legend-relationship": LocalJSX.InstantAppsInteractiveLegendRelationship & JSXBase.HTMLAttributes<HTMLInstantAppsInteractiveLegendRelationshipElement>;
            "instant-apps-popover": LocalJSX.InstantAppsPopover & JSXBase.HTMLAttributes<HTMLInstantAppsPopoverElement>;
            "instant-apps-popovers": LocalJSX.InstantAppsPopovers & JSXBase.HTMLAttributes<HTMLInstantAppsPopoversElement>;
            "instant-apps-social-share": LocalJSX.InstantAppsSocialShare & JSXBase.HTMLAttributes<HTMLInstantAppsSocialShareElement>;
        }
    }
}
