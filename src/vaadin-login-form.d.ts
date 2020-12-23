import {html} from '@polymer/polymer/lib/utils/html-tag.js';

import {LoginMixin} from './vaadin-login-mixin.js';

import {ElementMixin} from '@vaadin/vaadin-element-mixin/vaadin-element-mixin.js';

import {ThemableMixin} from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

import {PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `<vaadin-login-form>` is a Web Component providing an easy way to require users
 * to log in into an application. Note that component has no shadowRoot.
 *
 * ```
 * <vaadin-login-form></vaadin-login-form>
 * ```
 *
 * Component has to be accessible from the `document` layer in order to allow password managers to work properly with form values.
 * Using `<vaadin-login-overlay>` allows to always attach the component to the document body.
 *
 * ### Styling
 *
 * The component doesn't have a shadowRoot, so the html form and input fields can be styled in an upper layer. To style
 * `vaadin-login-form-wrapper` check its documentation.
 */
declare class LoginFormElement extends
  ElementMixin(
  ThemableMixin(
  LoginMixin(
  PolymerElement))) {
  connectedCallback(): void;
  _attachDom(dom: StampedTemplate|null): null;
  submit(): void;
}

declare global {

  interface HTMLElementTagNameMap {
    "vaadin-login-form": LoginFormElement;
  }
}

export {LoginFormElement};

import {StampedTemplate} from '@polymer/polymer/interfaces';
