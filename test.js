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

                     wrap('Button Bar', tc.buttonBar(
                         {
                             className: 'aClassName'
                         },
                         d.button(
                             { className: 'testClass', onClick: fn },
                             'One'
                         ),
                         d.button(
                             { className: 'testClass anotherClass', onClick: fn },
                             'Two'
                         ),
                         d.button(
                             { disabled: true, onClick: fn2 },
                             'Three'
                         )
                     )),

                     wrap('Large Button Bar', tc.buttonBar(
                         {
                             className: 'aClassName anotherClassName',
                             type: 'large'
                         },
                         d.button(
                             { className: 'testClass', onClick: fn },
                             'One'
                         ),
                         d.button(
                             { className: 'testClass anotherClass', onClick: fn },
                             'Two'
                         ),
                         d.button(
                             { disabled: true, onClick: fn2 },
                             'Three'
                         )
                     )),

                     wrap('Button', [
                         tc.button(
                             {
                                 className: 'aClassName',
                                 onClick: fn,
                                 onMouseDown: fn2
                             },
                             'Hello'
                         ),
                         tc.button(
                             {
                                 className: 'aClassName anotherClassName',
                                 onClick: fn,
                                 disabled: true
                             },
                             d.em(null, 'Hello')
                         )
                     ]),

                     wrap('Quiet Button', [tc.button({
                         type: 'quiet',
                         className: 'aClassName',
                         onClick: fn
                     }, 'Hello'), tc.button({
                         type: 'quiet',
                         className: 'aClassName anotherClassName',
                         onClick: fn,
                         disabled: true
                     }, d.em(null, 'Hello'))]),

                     wrap('Large Button', [tc.button({
                         type: 'large',
                         className: 'aClassName',
                         onClick: fn
                     }, 'Hello'), tc.button({
                         type: 'large',
                         className: 'aClassName anotherClassName',
                         onClick: fn,
                         disabled: true
                     }, d.em(null, 'Hello'))]),

                     wrap('Large Quiet Button', [tc.button({
                         type: 'large--quiet',
                         className: 'aClassName',
                         onClick: fn
                     }, d.em(null, 'Hello')), tc.button({
                         type: 'large--quiet',
                         className: 'aClassName anotherClassName',
                         onClick: fn,
                         disabled: true
                     }, 'Hello')]),

                     wrap('Call To Action Button', [tc.button({
                         type: 'cta',
                         className: 'aClassName',
                         onClick: fn
                     }, d.em(null, 'Hello')), tc.button({
                         type: 'cta',
                         className: 'aClassName anotherClassName',
                         onClick: fn,
                         disabled: true
                     }, 'Hello')]),

                     wrap('Large Call To Action Button', [tc.button({
                         type: 'large--cta',
                         className: 'aClassName',
                         onClick: fn
                     }, 'Hello'), tc.button({
                         type: 'large--cta',
                         className: 'aClassName anotherClassName',
                         onClick: fn,
                         disabled: true
                     }, d.em(null, 'Hello'))]),

                     wrap('Checkbox', [tc.checkbox({
                         className: 'aClassName',
                         label: 'Hello',
                         name: 'aName',
                         checked: true,
                         onChange: fn
                     }), d.br(), tc.checkbox({
                         className: 'aClassName anotherClassName',
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
                         onClick: fn,
                         which: 'menu-stack'
                     }), tc.iconButton({
                         className: 'aClassName anotherClassName',
                         onClick: fn,
                         disabled: true,
                         which: 'menu-stack'
                     })]),

                     wrap('Quiet Icon Button', [tc.iconButton({
                         type: 'quiet',
                         className: 'aClassName',
                         onClick: fn,
                         which: 'menu-stack'
                     }), tc.iconButton({
                         type: 'quiet',
                         className: 'aClassName anotherClassName',
                         onClick: fn,
                         which: 'menu-stack',
                         disabled: true
                     })]),

                     wrap('Large Icon Button', [tc.iconButton({
                         type: 'large',
                         className: 'aClassName',
                         which: 'menu-stack',
                         onClick: fn
                     }), tc.iconButton({
                         type: 'large',
                         className: 'aClassName anotherClassName',
                         onClick: fn,
                         disabled: true
                     })]),

                     wrap('Large Quiet Icon Button', [tc.iconButton({
                         type: 'large--quiet',
                         className: 'aClassName',
                         onClick: fn
                     }), tc.iconButton({
                         type: 'large--quiet',
                         className: 'aClassName anotherClassName',
                         onClick: fn,
                         which: 'menu-stack',
                         disabled: true
                     })]),

                     wrap('List', [tc.list(
                         {
                             className: 'aClassName',
                             header: 'Hello'
                         },
                         d.li(null, 'List item'),
                         d.li({ className: 'someClassName' }, 'List item 2')

                     ), d.br(), tc.list(
                         {
                             className: 'aClassName anotherClassName'
                         },
                         d.li(null, 'List item'),
                         d.li({ className: 'someClassName' }, d.em(null, 'List item 2'))
                     )]),

                     wrap('Navigation bar', [
                         d.p(null, '(There is currently a rendering bug in topcoat with normal buttons in navigation bars. Sorry.)'),
                         tc.navigationBar({
                             leftButton: tc.iconButton({
                                 onClick: fn,
                                 which: 'menu-stack'
                             }),
                             title: 'Hello',
                             rightButton: tc.button({
                                 onClick: fn
                             }, 'Button')
                         })
                     ]),

                     wrap('Notification', tc.notification({
                         className: 'aClassName',
                         onClick: fn
                     }, '7')),

                     wrap('Radio Button', [tc.radioButton({
                         className: 'aClassName',
                         label: 'Hello',
                         name: 'aName',
                         value: 'aValue',
                         onChange: fn2
                     }), d.br(), tc.radioButton({
                         className: 'aClassName',
                         label: 'Hello',
                         checked: true,
                         name: 'aName',
                         value: 'anotherValue'
                     }), d.br(), tc.radioButton({
                         className: 'aClassName anotherClassName',
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
                         className: 'aClassName anotherClassName',
                         onChange: function(e) { console.log(e.target.value); }
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
                         onChange: fn2
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
                         onChange: fn2
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
                         onChange: fn2
                     }), ' ', tc.switch({
                         className: 'aClassName anotherClassName',
                         name: 'anotherName',
                         checked: true,
                         disabled: true
                     })]),

                     wrap('Tab Bar', [tc.tabBar(
                         { className: 'aClassName' },
                         d.span(null, 'One'),
                         d.span({ className: 'someClassName' }, 'Two'),
                         d.span(null, d.em(null, 'Three'))
                     )]),

                     wrap('Text Input', [tc.textInput({
                         className: 'aClassName',
                         name: 'aName',
                         value: 'hello',
                         placeholder: 'text',
                         onChange: fn2
                     }), ' ', tc.textInput({
                         className: 'aClassName',
                         name: 'aName',
                         value: 'hello',
                         placeholder: 'text',
                         disabled: true
                     })]),

                     wrap('Large Text Input', [tc.textInput({
                         type: 'large',
                         className: 'aClassName',
                         name: 'aName',
                         value: 'hello',
                         placeholder: 'text',
                         onChange: fn2
                     }), ' ', tc.textInput({
                         type: 'large',
                         className: 'aClassName',
                         name: 'aName',
                         value: 'hello',
                         placeholder: 'text',
                         disabled: true
                     })]),

                     wrap('Text Area', [tc.textArea({
                         className: 'aClassName',
                         name: 'aName',
                         value: 'hello',
                         rows: 4,
                         cols: 11,
                         placeholder: 'text',
                         onChange: fn2
                     }), ' ', tc.textArea({
                         className: 'aClassName',
                         name: 'aName',
                         value: 'hello',
                         rows: 1,
                         cols: 10,
                         placeholder: 'text',
                         disabled: true
                     })]),

                     wrap('Large Text Area', [tc.textArea({
                         type: 'large',
                         className: 'aClassName',
                         name: 'aName',
                         value: 'hello',
                         rows: 3,
                         cols: 8,
                         placeholder: 'text',
                         onChange: fn2
                     }), ' ', tc.textArea({
                         type: 'large',
                         className: 'aClassName',
                         name: 'aName',
                         value: 'hello',
                         rows: 2,
                         cols: 9,
                         placeholder: 'text',
                         disabled: true
                     })])
                    );
    }
});

React.renderComponent(main(), document.getElementById('main'));
