.. _Name.Component:

Name.Component Class
====================

A Name.Component holds a read-only name component value

:[C++]:
    | ``#include <ndn-cpp/name.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn``

:[Java]:
    Package: ``net.named_data.jndn``

Name.Component Constructors
---------------------------

Name.Component Constructor (copy optional byte array)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a new Name.Component, optionally copying from the byte array.

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
    
        Name.Component = function NameComponent(
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

Name.Component Constructor (from Blob)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a new Name.Component, taking another pointer to the byte array in the Blob.

:[C++]:

    .. code-block:: c++
    
        Name::Component(
            const Blob& value
        );

:[Python]:

    .. code-block:: python
    
         def __init__(self, 
            value  # Blob
        )

:[JavaScript]:

    .. code-block:: javascript
    
        Name.Component = function NameComponent(
            value  // Blob
        )

:[Java]:

    .. code-block:: java
    
        Component(
            Blob value
        )

:Parameters:

    - `value`
        The Blob with the pointer to the byte array.

Name.Component Constructor (from Component)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a new Name.Component, taking another pointer to the component's value.

:[C++]:

    .. code-block:: c++
    
        Name::Component(
            const Name::Component& component
        );

:[Python]:

    .. code-block:: python
    
        def __init__(self, 
            component  # Name.Component
        )

:[JavaScript]:

    .. code-block:: javascript
    
        Name.Component = function NameComponent(
            component  // Name.Component
        )

:[Java]:

    .. code-block:: java
    
        Component(
            Component component
        )

:Parameters:

    - `component`
        The Name.Component to copy.

Name.Component.getValue Method
------------------------------

Get the value of the component.

:[C++]:

    .. code-block:: c++
    
        const Blob& getValue() const;

:[Python]:

    .. code-block:: python
    
        # Returns Blob
        def getValue(self)

:[Java]:

    .. code-block:: java
    
        public final Blob getValue()

:Returns:

    The component value.

Name.Component.toEscapedString Method
-------------------------------------

Convert this component value by escaping characters according to the NDN URI Scheme.

:[C++]:

    .. code-block:: c++
    
        std::string toEscapedString() const;

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

Name.Component.toNumber Method
------------------------------

Interpret this name component as a network-ordered number and return an integer.

:[C++]:

    .. code-block:: c++
    
        const uint64_t toNumber() const;

:[Python]:

    .. code-block:: python
    
        # Returns int
        def toNumber(self)

:[Java]:

    .. code-block:: java
    
        public final long toNumber()

:Returns:

    The integer number.

Name.Component.toNumberWithMarker Method
----------------------------------------

Interpret this name component as a network-ordered number with a 
marker and return an integer.

:[C++]:

    .. code-block:: c++
    
        const uint64_t toNumberWithMarker(
            uint8_t marker
        ) const;

:[Python]:

    .. code-block:: python
    
        # Returns int
        def toNumberWithMarker(self,
            marker  # int
        )

:[Java]:

    .. code-block:: java
    
        public final long toNumberWithMarker(
            byte marker
        )

:Parameters:

    - `marker`
        The required first byte of the component.

:Returns:

    The integer number.

:Throw:

    Throw an exception if the first byte of the component does not equal the marker.

Name.Component.toSegment Method
-------------------------------

Interpret this name component as a segment number according to NDN name 
conventions (a network-ordered number where the first byte is the marker 0x00).

:[C++]:

    .. code-block:: c++
    
        const uint64_t toSegment() const;

:[Python]:

    .. code-block:: python
    
        # Returns int
        def toSegment(self)

:[Java]:

    .. code-block:: java
    
        public final long toSegment()

:Returns:

    The integer segment number.

:Throw:

    Throw an exception if the first byte of the component is not the expected marker.

Name.Component.toVersion Method
-------------------------------

Interpret this name component as a version number according to NDN name 
conventions (a network-ordered number where the first byte is the marker 
0xFD).  Note that this returns the exact number from the component
without converting it to a time representation.

:[C++]:

    .. code-block:: c++
    
        const uint64_t toVersion() const;

:[Python]:

    .. code-block:: python
    
        # Returns int
        def toVersion(self)

:[Java]:

    .. code-block:: java
    
        public final long toVersion()

:Returns:

    The integer version number.

:Throw:

    Throw an exception if the first byte of the component is not the expected marker.
