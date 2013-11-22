WireFormat Class
================

:[C++]:
    Namespace: `ndn`

WireFormat Constructor
----------------------

Create a base class WireFormat where the methods throw an "unimplemented" error. You should use a derived class like BinaryXmlWireFormat.

:Realizations:

    - BinaryXmlWireFormat

:[C++]:

    .. code-block:: c++

        WireFormat();

:[JavaScript]:

    .. code-block:: javascript

        var WireFormat = function WireFormat()

WireFormat.setDefaultWireFormat Method
--------------------------------------

Set the static default WireFormat used by default encoding and decoding methods.

:[C++]:

    .. code-block:: c++

        static void setDefaultWireFormat(
        
            WireFormat* wireFormat
        
        )

:[JavaScript]:

    .. code-block:: javascript

        WireFormat.setDefaultWireFormat = function(

            wireFormat // WireFormat

        )

:Parameters:

    - `wireFormat`
        An object of a subclass of WireFormat.

WireFormat.getDefaultWireFormat Method
--------------------------------------

Return the default WireFormat used by default encoding and decoding methods. The initial value is a BinaryXmlWireFormat object. If can be changed with setDefaultWireFormat.

:[C++]:

    .. code-block:: c++

        static WireFormat* getDefaultWireFormat();

:[JavaScript]:

    .. code-block:: javascript

        WireFormat.getDefaultWireFormat = function()

:Returns:

    The default (subclass of) WireFormat object.
