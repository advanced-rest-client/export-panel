/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   export-form.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {LitElement, html, css} from 'lit-element';

declare namespace UiElements {

  /**
   * Export data form with export flow logic.
   *
   * Provides the UI and and logic to export data from the data store to `destination`
   * export method provider. It uses events API to communicate with other elements.
   *
   * Required elements to be present in the DOM:
   *
   * -   `arc-data-export` - getting data from the datastore
   * -   element that handles `file-data-save` event
   * -   element that handles `google-drive-data-save` event
   *
   * ### Example
   *
   * ```html
   * <arc-data-export app-version="12.0.0" electron-cookies></arc-data-export>
   * <google-drive-upload></google-drive-upload>
   * <file-save></file-save>
   *
   * <export-panel></export-panel>
   * ```
   *
   * ### Styling
   *
   * `<export-panel>` provides the following custom properties and mixins for styling:
   *
   * Custom property | Description | Default
   * ----------------|-------------|----------
   * `--warning-primary-color` | Error toast background color | `#FF7043`
   * `--warning-contrast-color` | Error toast color | `#fff`
   * `--context-menu-item-color` | Color of the dropdown menu items | ``
   * `--context-menu-item-background-color` | Background olor of the dropdown menu items | ``
   * `--context-menu-item-color-hover` | Color of the dropdown menu items when hovering | ``
   * `--context-menu-item-background-color-hover` | Background olor of the dropdown menu items when hovering | ``
   * `--export-form-action-button-color` | Color of the export button | `#fff`
   * `--export-form-action-button-background-color` | Background color of the export button | `--primary-color`
   */
  class ExportForm extends LitElement {
    readonly loading: any;

    /**
     * When `true` the component began export flow.
     */
    _loading: boolean|null|undefined;
    onloadingchnaged: Function|null;
    onarcdataexport: Function|null;

    /**
     * Export destination name.
     * By default it can be `file` or `drive`.
     */
    destination: string|null|undefined;

    /**
     * When set this value will be used for export file name.
     */
    fileName: string|null|undefined;

    /**
     * Enables compatibility with Anypoint platform
     */
    compatibility: boolean|null|undefined;

    /**
     * Enables outlined theme for inputs
     */
    outlined: boolean|null|undefined;

    /**
     * When set the encrypt file option is enabled.
     */
    encryptFile: boolean|null|undefined;

    /**
     * Encryption passphrase
     */
    passphrase: string|null|undefined;

    /**
     * When set it renders encryption options.
     */
    withEncrypt: boolean|null|undefined;
    constructor();
    render(): any;
    _destinationTemplate(): any;
    _fileInputTemplate(): any;
    _exportItemsTemplate(): any;
    _encryptionTemplate(): any;
    _encyptionPasswordTemplate(): any;

    /**
     * Registers an event handler for given type
     *
     * @param eventType Event type (name)
     * @param value The handler to register
     */
    _registerCallback(eventType: String|null, value: Function|null): void;

    /**
     * Handler for click event. Calls `startExport()` function.
     */
    _prepare(): void;

    /**
     * Selects all items on the list.
     */
    selectAll(): void;

    /**
     * Uses currend form data to start export flow.
     * This function is to expose public API to export data.
     *
     * @returns A promise resolved when export finishes
     */
    startExport(): Promise<any>|null;

    /**
     * Dispatches `export-data` custom event.
     * The event is handled by `arc-data-export` element.
     *
     * @param data List of deta stores to use in export.
     */
    _dispatchExport(data: object|null): CustomEvent|null;

    /**
     * Generates default export name value.
     */
    generateFileName(): String|null;
    _destinationHandler(e: any): void;
    _dropdownOpenedHandler(e: any): void;
    _checkedChanged(e: any): void;
    _inputHandler(e: any): void;
  }
}

declare global {

  interface HTMLElementTagNameMap {
    "export-form": UiElements.ExportForm;
  }
}
