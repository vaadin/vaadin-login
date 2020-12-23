/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   src/vaadin-login-overlay.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.

import {PolymerElement} from '@polymer/polymer/polymer-element.js';

import {ThemableMixin} from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

import {ElementMixin} from '@vaadin/vaadin-element-mixin/vaadin-element-mixin.js';

import {LoginMixin} from './vaadin-login-mixin.js';

import {html} from '@polymer/polymer/lib/utils/html-tag.js';

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
  PolymerElement))) {

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
  ready(): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
}

declare global {

  interface HTMLElementTagNameMap {
    "vaadin-login-overlay": LoginOverlayElement;
  }
}

export {LoginOverlayElement};