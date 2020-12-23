import {ThemableMixin} from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

import {ElementMixin} from '@vaadin/vaadin-element-mixin/vaadin-element-mixin.js';

import {LoginMixin} from './vaadin-login-mixin.js';

/**
 * `<vaadin-login-overlay>` is a wrapper of the `<vaadin-login-form>` which opens a login form in an overlay and
 * having an additional `brand` part for application title and description. Using `<vaadin-login-overlay>` allows
 * password managers to work with login form.
 *
 * ```
 * <vaadin-login-overlay opened></vaadin-login-overlay>
 * ```
 *
 * ### Styling
 *
 * To style the element check: [`<vaadin-login-overlay-wrapper>`](#/elements/vaadin-login-overlay-wrapper),
 * [`<vaadin-login-form-wrapper>`](#/elements/vaadin-login-form-wrapper), [`<vaadin-login-form>`](#/elements/vaadin-login-form)
 * and `<vaadin-overlay>` elements
 */
declare class LoginOverlayElement extends
  ElementMixin(
  ThemableMixin(
  LoginMixin(
  HTMLElement))) {

  /**
   * Defines the application description
   */
  description: string;

  /**
   * True if the overlay is currently displayed.
   */
  opened: boolean;

  /**
   * Defines the application title
   */
  title: string;
}

declare global {

  interface HTMLElementTagNameMap {
    "vaadin-login-overlay": LoginOverlayElement;
  }
}

export {LoginOverlayElement};
