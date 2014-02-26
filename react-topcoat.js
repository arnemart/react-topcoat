/*jshint node:true, browser:true*/
/*global define:true*/
(function(root) {
    function init(React) {
        React = React || root.React;
        var d = React.DOM;

        function classNames(baseClass, additionalClasses) {
            if (additionalClasses && additionalClasses.join) {
                return baseClass + ' ' + additionalClasses.join(' ');
            } else if (typeof additionalClasses === 'string') {
                return baseClass + ' ' + additionalClasses;
            } else {
                return baseClass;
            }
        }

        function map(list, fn) {
            var result = [];
            for (var i in list) {
                if (list.hasOwnProperty(i)) {
                    result.push(fn(list[i]));
                }
            }
            return result;
        }

        function merge(obj, anotherObj) {
            if (!obj) {
                obj = {};
            }
            if (!anotherObj) {
                return obj;
            }
            for (var i in anotherObj) {
                if (anotherObj.hasOwnProperty(i)) {
                    obj[i] = anotherObj[i];
                }
            }
            return obj;
        }

        var tc = {};

        /*
         * className
         * type (large)
         * items {className, onClick, disabled, content, events}
         */
        tc.buttonBar = React.createClass({
            render: function() {
                var buttonClass = (this.props.type === 'large' ? 'topcoat-button-bar__button--large' : 'topcoat-button-bar__button');
                return d.div(
                    { className: classNames('topcoat-button-bar', this.props.className) },
                    map(this.props.items, function(item) {
                        return d.div(
                            { className: 'topcoat-button-bar__item' },
                            d.button(
                                merge({
                                    className: classNames(buttonClass, item.className),
                                    onClick: item.onClick,
                                    disabled: item.disabled
                                }, item.events),
                                item.content
                            )
                        );
                    })
                );
            }
        });

        /*
         * className
         * type (quiet, large, large--quiet, cta, large--cta)
         * content
         * onClick
         * events
         * disabled
         */
        tc.button = React.createClass({
            render: function() {
                return d.button(
                    merge({
                        className: classNames('topcoat-button' + (this.props.type ? '--' + this.props.type : ''), this.props.className),
                        onClick: this.props.onClick,
                        disabled: this.props.disabled
                    }, this.props.events),
                    this.props.content
                );
            }
        });

        /*
         * className
         * labelPosition (left, right)
         * label
         * name
         * id
         * value
         * checked
         * inputClassName
         * disabled
         * events
         */
        tc.checkbox = React.createClass({
            getDefaultProps: function() {
                return {
                    labelPosition: 'right'
                };
            },
            render: function() {
                return d.label(
                    { className: classNames('topcoat-checkbox', this.props.className) },
                    (this.props.labelPosition === 'left' ? [this.props.label, ' '] : null),
                    d.input(merge({
                        type: 'checkbox',
                        name: this.props.name,
                        id: this.props.id,
                        defaultValue: this.props.value,
                        defaultChecked: this.props.checked,
                        className: this.props.inputClassName,
                        disabled: this.props.disabled
                    }, this.props.events)),
                    d.div({ className: 'topcoat-checkbox__checkmark' }),
                    (this.props.labelPosition === 'right' ? [' ', this.props.label] : null)
                );
            }
        });

        /*
         * which
         */
        tc.icon = React.createClass({
            render: function() {
                return d.span({
                    className: 'topcoat-icon topcoat-icon--' + this.props.which
                });
            }
        });

        /*
         * className
         * type (quiet, large, large--quiet)
         * which
         * onClick
         * events
         * disabled
         */
        tc.iconButton = React.createClass({
            render: function() {
                return d.button(
                    merge({
                        className: classNames('topcoat-icon-button' + (this.props.type ? '--' + this.props.type : ''), this.props.className),
                        onClick: this.props.onClick,
                        disabled: this.props.disabled
                    }, this.props.events),
                    d.span(
                        { className: classNames((this.props.type && this.props.type.match('large') ? 'topcoat-icon--large' : 'topcoat-icon') + (this.props.which ? ' topcoat-icon--' + this.props.which : ''), this.props.iconClassName) }
                    )
                );
            }
        });

        /*
         * className
         * header
         * items {className, content, events}
         */
        tc.list = React.createClass({
            render: function() {
                var itemKey = 0;
                return d.div(
                    { className: classNames('topcoat-list', this.props.className) },
                    (this.props.header ? d.h3({ className: 'topcoat-list__header' }, this.props.header) : null),
                    d.ul(
                        { className: 'topcoat-list__container' },
                        map(this.props.items, function(item) {
                            return d.li(
                                merge({
                                    className: classNames('topcoat-list__item', item.className),
                                    key: itemKey++
                                }, item.events),
                                item.content
                            );
                        })
                    )
                );
            }
        });

        /*
         * className
         * leftButton,
         * title,
         * rightButton
         */
        tc.navigationBar = React.createClass({
            render: function() {
                return d.div(
                    { className: classNames('topcoat-navigation-bar', this.props.className) },
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
                );
            }
        });

        /*
         * className
         * content
         * events
         */
        tc.notification = React.createClass({
            render: function() {
                return d.span(
                    merge({ className: classNames('topcoat-notification', this.props.className )}, this.props.events),
                    this.props.content
                );
            }
        });

        /*
         * className
         * labelPosition (left, right)
         * label
         * name
         * id
         * value
         * checked
         * inputClassName
         * disabled
         * events
         */
        tc.radioButton = React.createClass({
            getDefaultProps: function() {
                return {
                    labelPosition: 'right'
                };
            },
            render: function() {
                return d.label(
                    { className: classNames('topcoat-radio-button', this.props.className) },
                    (this.props.labelPosition === 'left' ? [this.props.label, ' '] : null),
                    d.input(merge({
                        type: 'radio',
                        name: this.props.name,
                        id: this.props.id,
                        defaultValue: this.props.value,
                        defaultChecked: this.props.checked,
                        className: this.props.inputClassName,
                        disabled: this.props.disabled
                    }, this.props.events)),
                    d.div({ className: 'topcoat-radio-button__checkmark' }),
                    (this.props.labelPosition === 'right' ? [' ', this.props.label] : null)
                );
            }
        });

        /*
         * className
         * min
         * max
         * step
         * value
         * name
         * id
         * disabled
         * events
         */
        tc.range = React.createClass({
            render: function() {
                return d.input(merge({
                    type: 'range',
                    min: this.props.min,
                    max: this.props.max,
                    step: this.props.step,
                    defaultValue: this.props.value,
                    name: this.props.name,
                    id: this.props.id,
                    className: classNames('topcoat-range', this.props.className),
                    disabled: this.props.disabled
                }, this.props.events));
            }
        });

        /*
         * className
         * placeholder
         * name
         * id
         * disabled
         * value
         * events
         * type (large)
         */
        tc.searchInput = React.createClass({
            render: function() {
                return d.input(merge({
                    type: 'search',
                    placeholder: this.props.placeholder,
                    name: this.props.name,
                    id: this.props.id,
                    className: classNames('topcoat-search-input' + (this.props.type === 'large' ? '--large' : ''), this.props.className),
                    disabled: this.props.disabled,
                    defaultValue: this.props.value
                }, this.props.events));
            }
        });

        /*
         * className
         * name
         * id
         * value
         * checked
         * inputClassName
         * disabled
         * events
         */
        tc.switch = React.createClass({
            render: function() {
                return d.label(
                    { className: classNames('topcoat-switch', this.props.className) },
                    d.input(merge({
                        type: 'checkbox',
                        name: this.props.name,
                        defaultChecked: this.props.checked,
                        id: this.props.id,
                        className: classNames('topcoat-switch__input', this.props.inputClassName),
                        disabled: this.props.disabled
                    }, this.props.events)),
                    d.div({ className: 'topcoat-switch__toggle' })
                );
            }
        });

        /*
         * className
         * name
         * events
         * items {className, inputClassName, buttonClassName, content, checked, id, content, events}
         */
        tc.tabBar = React.createClass({
            getDefaultProps: function() {
                return {
                    name: 'tab-bar'
                };
            },
            render: function() {
                console.log('render tab bar');
                var self = this;
                return d.div(
                    { className: classNames('topcoat-tab-bar', this.props.className) },
                    map(this.props.items, function(item) {
                        return d.label(
                            { className: classNames('topcoat-tab-bar__item', item.className) },
                            d.input(merge({
                                type: 'radio',
                                name: self.props.name,
                                defaultChecked: item.checked,
                                id: item.id,
                                className: classNames('', item.inputClassName)
                            }, merge(self.props.events, item.events))),
                            d.button(
                                { className: classNames('topcoat-tab-bar__button', item.buttonClassName) },
                                item.content
                            )
                        );
                    })
                );
            }
        });

        /*
         * className
         * placeholder
         * name
         * id
         * disabled
         * value
         * events
         * pattern
         * type (large)
         */
        tc.textInput = React.createClass({
            render: function() {
                return d.input(merge({
                    type: 'text',
                    placeholder: this.props.placeholder,
                    name: this.props.name,
                    id: this.props.id,
                    className: classNames('topcoat-text-input' + (this.props.type === 'large' ? '--large' : ''), this.props.className),
                    disabled: this.props.disabled,
                    defaultValue: this.props.value,
                    pattern: this.props.pattern
                }, this.props.events));
            }
        });

        /*
         * className
         * placeholder
         * name
         * id
         * rows
         * cols
         * disabled
         * content
         * events
         * type (large)
         */
        tc.textArea = React.createClass({
            render: function() {
                return d.textarea(
                    merge({
                        className: classNames('topcoat-textarea' + (this.props.type === 'large' ? '--large' : ''), this.props.className),
                        name: this.props.name,
                        id: this.props.id,
                        rows: this.props.rows,
                        cols: this.props.cols,
                        placeholder: this.props.placeholder,
                        disabled: this.props.disabled
                    }, this.props.events),
                    this.props.content
                );
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

