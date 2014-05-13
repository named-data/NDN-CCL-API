.. _Name.Component:

Name.Component Class
====================

A Name.Component is holds a read-only name component value

:[C++]:
    | ``#include <ndn-cpp/name.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn``

:[Java]:
    Package: ``net.named_data.jndn``

Name.Component Constructor
--------------------------

Create a new Name.Component, copying the optional value.


:[C++]:

    .. code-block:: c++
    
        Name::Component(
            [const std::vector<uint8_t>& value]
        );

:[Python]:

    .. code-block:: python
    
        def __init__(self
            [, value  # bytearray|memoryview|other array of int]
        )

:[JavaScript]:

    .. code-block:: javascript
    
        Name.Component = function NameComponent (
            [value  // Array<number>|ArrayBuffer|Uint8Array]
        )

:[Java]:

    .. code-block:: java
    
        public Component(
            [byte[] value]
        )

:Parameters:

    - `value`
        (optional) The content byte array to copy. If omitted, create a Component with an empty value.

Name.Component.toEscapedString Method
-------------------------------------

Convert this component value by escaping characters according to the NDN URI Scheme.

:[C++]:

    .. code-block:: c++
    
        std::string toEscapedString() const ();

:[Python]:

    .. code-block:: python
    
        # Returns str
        def toEscapedString(self)

:[JavaScript]:

    .. code-block:: javascript
    
        // Returns string
        Name.Component.prototype.toEscapedString = function()

:[Java]:

    .. code-block:: java
    
        public final String toEscapedString()

:Returns:

    The escaped string.
