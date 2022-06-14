/// <reference types="arcgis-js-api" />
import SocialShare_T9n from '../../assets/t9n/instant-apps-social-share/resources.json';
declare type ShareItemOptions = 'link' | 'facebook' | 'twitter' | 'linkedIn';
export declare class InstantAppsSocialShare {
  el: HTMLInstantAppsSocialShareElement;
  popoverRef: HTMLCalcitePopoverElement;
  embedWidthRef: HTMLInputElement | undefined;
  embedHeightRef: HTMLInputElement | undefined;
  embedCodeRef: HTMLTextAreaElement | undefined;
  copyLinkPopoverRef: HTMLCalcitePopoverElement;
  copyEmbedPopoverRef: HTMLCalcitePopoverElement;
  dialogContentRef: HTMLDivElement | undefined;
  shareListRef: HTMLUListElement | undefined;
  popoverButtonRef: HTMLCalciteButtonElement | undefined;
  mode: 'popover' | 'inline';
  shareUrl: string;
  shareText: string;
  embed: boolean;
  shareButtonColor: 'inverse' | 'neutral';
  iframeInnerText: string;
  popoverButtonIconScale: 's' | 'm' | 'l';
  view: __esri.MapView | __esri.SceneView;
  displayTipText: boolean;
  socialMedia: boolean;
  shareIconsLayout: 'vertical' | 'horizontal';
  scale: 's' | 'm' | 'l';
  defaultUrlParams: {
    center?: boolean;
    level?: boolean;
    viewpoint?: boolean;
    selectedFeature?: boolean;
    hiddenLayers?: boolean;
  } | null;
  messages: typeof SocialShare_T9n;
  opened: boolean;
  copied: boolean;
  inlineCopyLinkOpened: boolean;
  inlineCopyEmbedOpened: boolean;
  embedWidth: number;
  embedHeight: number;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  getMessages(): Promise<void>;
  setupAutoCloseListeners(): void;
  handlePopoverRefKeyDown(e: KeyboardEvent): void;
  autoCloseCallback(): void;
  stopPropagationCallback(event: Event): void;
  resetPopoverCopyState(): void;
  updateDimensions(type: 'width' | 'height'): void;
  render(): any;
  renderSuccess(): any;
  renderEmbedSuccess(): any;
  renderOptions(): any;
  handleOptionKeyDown(type: ShareItemOptions): (e: KeyboardEvent) => void;
  renderFacebookIcon(): any;
  renderTwitterIcon(): any;
  renderLinkedInIcon(): any;
  renderTip(): any;
  renderEmbed(): any;
  togglePopover(event: Event): void;
  closePopover(): void;
  handleShareItem(type: ShareItemOptions): Promise<void>;
  shortenUrl(url: string): Promise<any>;
  getEmbedCode(): string;
  copyEmbedCode(): void;
  generateShareUrl(): Promise<string>;
  processPoint(point: __esri.Point): Promise<__esri.Point>;
  generateShareUrlParams(point: __esri.Point): string;
  roundValue(val: number, decimalPoints?: number): number;
}
export {};
