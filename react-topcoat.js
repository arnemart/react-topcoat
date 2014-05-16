/*jshint node:true, browser:true*/
/*global define:true*/
(function(root) {
    function init(React) {
        React = React || root.React;
        var d = React.DOM;

        var tc = {};

        function _map(list, fn) {
            var result = [];
            for (var i in list) {
                if (list.hasOwnProperty(i)) {
                    result.push(fn(list[i]));
                }
            }
            return result;
        };

        /*
         * Button bar
         *
         * type (large)
         */
        tc.buttonBar = React.createClass({
            render: function() {
                var buttonClass = (this.props.type === 'large' ? ' topcoat-button-bar__button--large' : ' topcoat-button-bar__button');
                var buttonKey = 0;
                return this.transferPropsTo(d.div(
                    { className: 'topcoat-button-bar' },
                    _map(this.props.children, function(child) {
                        child.props.className = child.props.className + buttonClass;
                        return d.div(
                            {
                                className: 'topcoat-button-bar__item',
                                key: buttonKey++
                            },
                            child
                        );
                    })
                ));
            }
        });

        /*
         * Button
         *
         * type (quiet, large, large--quiet, cta, large--cta)
         */
        tc.button = React.createClass({
            render: function() {
                return this.transferPropsTo(d.button(
                    { className: 'topcoat-button' + (this.props.type ? '--' + this.props.type : '') },
                    this.props.children
                ));
            }
        });

        /*
         * Checkbox
         *
         * labelPosition (left, right)
         * label
         */
        tc.checkbox = React.createClass({
            getDefaultProps: function() {
                return {
                    labelPosition: 'right'
                };
            },
            render: function() {
                var input = this.transferPropsTo(d.input({
                    type: 'checkbox',
                    defaultValue: this.props.value,
                    defaultChecked: this.props.checked
                }));
                input.props.value = null;
                input.props.checked = null;
                return d.label(
                    { className: 'topcoat-checkbox' },
                    (this.props.labelPosition === 'left' ? [this.props.label, ' '] : null),
                    input,
                    d.div({ className: 'topcoat-checkbox__checkmark' }),
                    (this.props.labelPosition === 'right' ? [' ', this.props.label] : null)
                );
            }
        });

        /*
         * Icon
         *
         * which
         * type (large)
         */
        tc.icon = React.createClass({
            render: function() {
                return d.span({
                    className: (this.props.type === 'large' ? 'topcoat-icon--large' : 'topcoat-icon') + ' topcoat-icon--' + this.props.which
                });
            }
        });

        /*
         * Icon button
         *
         * type (quiet, large, large--quiet)
         * which
         */
        tc.iconButton = React.createClass({
            render: function() {
                return this.transferPropsTo(d.button(
                    { className: 'topcoat-icon-button' + (this.props.type ? '--' + this.props.type : '') },
                    tc.icon({
                        which: this.props.which,
                        type: (this.props.type && this.props.type.match(/large/) ? 'large' : null)
                    })
                ));
            }
        });

        /*
         * List
         *
         * header
         */
        tc.list = React.createClass({
            render: function() {
                var itemKey = 0;
                return this.transferPropsTo(d.div(
                    { className: 'topcoat-list' },
                    (this.props.header ? d.h3({ className: 'topcoat-list__header' }, this.props.header) : null),
                    d.ul(
                        { className: 'topcoat-list__container' },
                        _map(this.props.children, function(child) {
                            child.props.className = child.props.className + ' topcoat-list__item';
                            child.props.key = itemKey++;
                            return child;
                        })
                    )
                ));
            }
        });

        /*
         * Navigation bar
         *
         * leftButton
         * title
         * rightButton
         */
        tc.navigationBar = React.createClass({
            render: function() {
                return this.transferPropsTo(d.div(
                    { className: 'topcoat-navigation-bar' },
                    d.div(
                        { className: 'topcoat-navigation-bar__item left quarter' },
                        this.props.leftButton
                    ),
                    d.div(
                        { className: 'topcoat-navigation-bar__item center half' },
                        d.h1(
                            { className: 'topcoat-navigation-bar__title' },
                            this.props.title
                        )
                    ),
                    d.div(
                        { className: 'topcoat-navigation-bar__item right quarter' },
                        this.props.rightButton
                    )
                ));
            }
        });

        /*
         * Notification
         */
        tc.notification = React.createClass({
            render: function() {
                return this.transferPropsTo(d.span(
                    { className: 'topcoat-notification' },
                    this.props.children
                ));
            }
        });

        /*
         * Radio button
         *
         * labelPosition (left, right)
         * label
         */
        tc.radioButton = React.createClass({
            getDefaultProps: function() {
                return {
                    labelPosition: 'right'
                };
            },
            render: function() {
                var input = this.transferPropsTo(d.input({
                    type: 'radio',
                    defaultChecked: this.props.checked,
                    defaultValue: this.props.value
                }));
                input.props.value = null;
                input.props.checked = null;
                return d.label(
                    { className: 'topcoat-radio-button' },
                    (this.props.labelPosition === 'left' ? [this.props.label, ' '] : null),
                    input,
                    d.div({ className: 'topcoat-radio-button__checkmark' }),
                    (this.props.labelPosition === 'right' ? [' ', this.props.label] : null)
                );
            }
        });

        /*
         * Range
         */
        tc.range = React.createClass({
            render: function() {
                var range = this.transferPropsTo(d.input({
                    type: 'range',
                    defaultValue: this.props.value,
                    className: 'topcoat-range'
                }));
                range.props.value = null;
                return range;
            }
        });

        /*
         * Search input
         *
         * type (large)
         */
        tc.searchInput = React.createClass({
            render: function() {
                var input = this.transferPropsTo(d.input({
                    type: 'search',
                    className: 'topcoat-search-input' + (this.props.type === 'large' ? '--large' : ''),
                    defaultValue: this.props.value
                }));
                input.props.value = null;
                return input;
            }
        });

        /*
         * Switch
         */
        tc.switch = React.createClass({
            render: function() {
                var input = this.transferPropsTo(d.input({
                    type: 'checkbox',
                    className: 'topcoat-switch__input',
                    defaultValue: this.props.value
                }));
                input.props.value = null;
                return d.label(
                    { className: 'topcoat-switch' },
                    input,
                    d.div({ className: 'topcoat-switch__toggle' })
                );
            }
        });

        /*
         * Tab bar
         */
        tc.tabBar = React.createClass({
            getDefaultProps: function() {
                return {
                    name: 'tab-bar-' + Math.random()
                };
            },
            render: function() {
                var self = this;
                var itemKey = 0;
                return this.transferPropsTo(d.div(
                    { className: 'topcoat-tab-bar' },
                    _map(this.props.children, function(child) {
                        child.props.className = child.props.className + ' topcoat-tab-bar__button';
                        return d.label(
                            {
                                className: 'topcoat-tab-bar__item',
                                key: itemKey++
                            },
                            d.input({
                                type: 'radio',
                                name: self.props.name,
                                defaultChecked: child.active
                            }),
                            child
                        );
                    })
                ));
            }
        });

        /*
         * Text input
         * type (large)
         */
        tc.textInput = React.createClass({
            render: function() {
                var input = this.transferPropsTo(d.input({
                    type: 'text',
                    className: 'topcoat-text-input' + (this.props.type === 'large' ? '--large' : ''),
                    defaultValue: this.props.value
                }));
                input.props.value = null;
                return input;
            }
        });

        /*
         * Text area
         *
         * value
         * type (large)
         */
        tc.textArea = React.createClass({
            render: function() {
                var textarea = this.transferPropsTo(d.textarea(
                    {
                        className: 'topcoat-textarea' + (this.props.type === 'large' ? '--large' : ''),
                        defaultValue: this.props.value
                    }
                ));
                textarea.props.value = null;
                return textarea;
            }
        });

        return tc;
    }

    // Exposify
    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = init(require('react'));
    } else if (typeof define === 'function' && define.amd) {
        define(['react'], function(React) {
            return init(React);
        });
    } else {
        root.ReactTopcoat = init();
    }

})(this);

