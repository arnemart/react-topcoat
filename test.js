/*jshint devel:true*/
var React = require('react');
var d = React.DOM;
var tc = require('./react-topcoat');

function wrap(header, components) {
    return d.div(null, d.h3(null, header), components);
}

function fn() {
    alert('hello');
}

function fn2() {
    console.log('hello');
}

var main = React.createClass({
    render: function() {
        return d.div(null,

            wrap('Button Bar', tc.buttonBar({
                className: 'aClassName',
                items: [
                    { content: 'One', onClick: fn, className: 'testClass' },
                    { content: d.em(null, 'Two'), events: { onClick: fn }, className: ['testClass', 'anotherClass'] },
                    { content: 'Three', onClick: fn, disabled: true }
                ]
            })),

            wrap('Large Button Bar', tc.buttonBar({
                className: ['aClassName', 'anotherClassName'],
                type: 'large',
                items: [
                    { content: 'One', events: { onClick: fn }, className: 'testClass' },
                    { content: d.em(null, 'Two'), onClick: fn, className: ['testClass', 'anotherClass'], disabled: true },
                    { content: 'Three', onClick: fn }
                ]
            })),

            wrap('Button', [tc.button({
                className: 'aClassName',
                content: 'Hello',
                onClick: fn,
                events: {
                    onMouseDown: fn2
                }
            }), tc.button({
                className: ['aClassName', 'anotherClassName'],
                content: d.em(null, 'Hello'),
                onClick: fn,
                disabled: true
            })]),

            wrap('Quiet Button', [tc.button({
                type: 'quiet',
                className: 'aClassName',
                content: 'Hello',
                onClick: fn
            }), tc.button({
                type: 'quiet',
                className: ['aClassName', 'anotherClassName'],
                content: d.em(null, 'Hello'),
                onClick: fn,
                disabled: true
            })]),

            wrap('Large Button', [tc.button({
                type: 'large',
                className: 'aClassName',
                content: 'Hello',
                onClick: fn
            }), tc.button({
                type: 'large',
                className: ['aClassName', 'anotherClassName'],
                content: d.em(null, 'Hello'),
                onClick: fn,
                disabled: true
            })]),

            wrap('Large Quiet Button', [tc.button({
                type: 'large--quiet',
                className: 'aClassName',
                content: 'Hello',
                onClick: fn
            }), tc.button({
                type: 'large--quiet',
                className: ['aClassName', 'anotherClassName'],
                content: d.em(null, 'Hello'),
                onClick: fn,
                disabled: true
            })]),

            wrap('Call To Action Button', [tc.button({
                type: 'cta',
                className: 'aClassName',
                content: 'Hello',
                onClick: fn
            }), tc.button({
                type: 'cta',
                className: ['aClassName', 'anotherClassName'],
                content: d.em(null, 'Hello'),
                onClick: fn,
                disabled: true
            })]),

            wrap('Large Call To Action Button', [tc.button({
                type: 'large--cta',
                className: 'aClassName',
                content: 'Hello',
                onClick: fn
            }), tc.button({
                type: 'large--cta',
                className: ['aClassName', 'anotherClassName'],
                content: d.em(null, 'Hello'),
                onClick: fn,
                disabled: true
            })]),

            wrap('Checkbox', [tc.checkbox({
               className: 'aClassName',
               label: 'Hello',
               name: 'aName',
               events: { onChange: fn }
            }), d.br(), tc.checkbox({
               className: ['aClassName', 'anotherClassName'],
               label: d.em(null, 'Hello'),
               labelPosition: 'left',
               name: 'anotherName',
               checked: true,
               disabled: true
            })]),

            wrap('Icon', tc.icon({
                which: 'menu-stack' // I guess this is the only one that works?
            })),

            wrap('Icon Button', [tc.iconButton({
                className: 'aClassName',
                iconClassName: 'someClassName',
                events: { onClick: fn },
                which: 'menu-stack'
            }), tc.iconButton({
                className: ['aClassName', 'anotherClassName'],
                iconClassName: ['someClassName', 'someOtherClassName'],
                onClick: fn,
                disabled: true
            })]),

            wrap('Quiet Icon Button', [tc.iconButton({
                type: 'quiet',
                className: 'aClassName',
                iconClassName: 'someClassName',
                onClick: fn
            }), tc.iconButton({
                type: 'quiet',
                className: ['aClassName', 'anotherClassName'],
                iconClassName: ['someClassName', 'someOtherClassName'],
                onClick: fn,
                which: 'menu-stack',
                disabled: true
            })]),

            wrap('Large Icon Button', [tc.iconButton({
                type: 'large',
                className: 'aClassName',
                iconClassName: 'someClassName',
                which: 'menu-stack',
                onClick: fn
            }), tc.iconButton({
                type: 'large',
                className: ['aClassName', 'anotherClassName'],
                iconClassName: ['someClassName', 'someOtherClassName'],
                onClick: fn,
                disabled: true
            })]),

            wrap('Large Quiet Icon Button', [tc.iconButton({
                type: 'large--quiet',
                className: 'aClassName',
                iconClassName: 'someClassName',
                onClick: fn
            }), tc.iconButton({
                type: 'large--quiet',
                className: ['aClassName', 'anotherClassName'],
                iconClassName: ['someClassName', 'someOtherClassName'],
                onClick: fn,
                which: 'menu-stack',
                disabled: true
            })]),

            wrap('List', [tc.list({
                className: 'aClassName',
                header: 'Hello',
                items: [
                    { content: 'List item', events: { onClick: fn } },
                    { content: d.em(null, 'List item 2'), className: 'someClassName' }
                ]
            }), d.br(), tc.list({
                className: ['aClassName', 'anotherClassName'],
                items: [
                    { content: 'List item', events: { onClick: fn } },
                    { content: d.em(null, 'List item 2'), className: ['someClassName', 'someOtherClassName'] }
                ]
            })]),

            wrap('Navigation bar', [d.p(null,
                '(There is currently a rendering bug in topcoat with normal buttons in navigation bars. Sorry.)'
            ), tc.navigationBar({
                leftButton: tc.iconButton({
                    onClick: fn,
                    which: 'menu-stack'
                }),
                title: 'Hello',
                rightButton: tc.button({
                    content: 'Button',
                    onClick: fn
                })
            })]),

            wrap('Notification', tc.notification({
                className: 'aClassName',
                content: '7',
                events: { onClick: fn }
            })),

            wrap('Radio Button', [tc.radioButton({
               className: 'aClassName',
               label: 'Hello',
               name: 'aName',
               value: 'aValue',
               events: { onChange: fn2 }
            }), d.br(), tc.radioButton({
               className: 'aClassName',
               label: 'Hello',
               checked: true,
               name: 'aName',
               value: 'anotherValue'
            }), d.br(), tc.radioButton({
               className: ['aClassName', 'anotherClassName'],
               label: d.em(null, 'Hello'),
               labelPosition: 'left',
               name: 'anotherName',
               checked: true,
               disabled: true
            })]),

            wrap('Range', [tc.range({
                min: 20,
                max: 200,
                step: 4,
                value: 40,
                name: 'aName',
                className: ['aClassName', 'anotherClassName'],
                events: { onChange: function(e) { console.log(e.target.value); } }
            }), ' ', tc.range({
                min: 20,
                max: 200,
                step: 4,
                value: 40,
                name: 'aName',
                className: 'aClassName',
                disabled: true
            })]),

            wrap('Search Input', [tc.searchInput({
                className: 'aClassName',
                name: 'aName',
                value: 'hello',
                placeholder: 'search',
                events: { onChange: fn2 }
            }), ' ', tc.searchInput({
                className: 'aClassName',
                name: 'aName',
                value: 'hello',
                placeholder: 'search',
                disabled: true
            })]),

            wrap('Large Search Input', [tc.searchInput({
                type: 'large',
                className: 'aClassName',
                name: 'aName',
                value: 'hello',
                placeholder: 'search',
                events: { onChange: fn2 }
            }), ' ', tc.searchInput({
                type: 'large',
                className: 'aClassName',
                name: 'aName',
                value: 'hello',
                placeholder: 'search',
                disabled: true
            })]),

            wrap('Switch', [tc.switch({
               className: 'aClassName',
               name: 'aName',
               events: { onChange: fn2 }
            }), ' ', tc.switch({
               className: ['aClassName', 'anotherClassName'],
               name: 'anotherName',
               checked: true,
               disabled: true
            })]),

            wrap('Tab Bar', [d.p(null, '(Buggy at the moment)'), tc.tabBar({
                className: 'aClassName',
                items: [
                    { content: 'One', className: ['someClassName', 'someOtherClassName'], inputClassName: 'inputClass', buttonClassName: 'buttonClass'},
                    { content: d.em(null, 'Two') },
                    { content: 'Three' }
                ]
            })]),

            wrap('Text Input', [tc.textInput({
                className: 'aClassName',
                name: 'aName',
                value: 'hello',
                placeholder: 'search',
                events: { onChange: fn2 }
            }), ' ', tc.textInput({
                className: 'aClassName',
                name: 'aName',
                value: 'hello',
                placeholder: 'search',
                disabled: true
            })]),

            wrap('Large Text Input', [tc.textInput({
                type: 'large',
                className: 'aClassName',
                name: 'aName',
                value: 'hello',
                placeholder: 'search',
                events: { onChange: fn2 }
            }), ' ', tc.textInput({
                type: 'large',
                className: 'aClassName',
                name: 'aName',
                value: 'hello',
                placeholder: 'search',
                disabled: true
            })]),

            wrap('Text Area', [tc.textArea({
                className: 'aClassName',
                name: 'aName',
                content: 'hello',
                rows: 4,
                cols: 11,
                placeholder: 'search',
                events: { onChange: fn2 }
            }), ' ', tc.textArea({
                className: 'aClassName',
                name: 'aName',
                content: 'hello',
                rows: 1,
                cols: 10,
                placeholder: 'search',
                disabled: true
            })]),

            wrap('Large Text Area', [tc.textArea({
                type: 'large',
                className: 'aClassName',
                name: 'aName',
                content: 'hello',
                rows: 3,
                cols: 8,
                placeholder: 'search',
                events: { onChange: fn2 }
            }), ' ', tc.textArea({
                type: 'large',
                className: 'aClassName',
                name: 'aName',
                content: 'hello',
                rows: 2,
                cols: 9,
                placeholder: 'search',
                disabled: true
            })])
        );
    }
});

React.renderComponent(main(), document.getElementById('main'));