.. _Data:

Data Class
==========

:[C++]:
    Namespace: ``ndn``

:[Python]:
    Module: ``pyndn``

Data Constructor
----------------

Create a new Data with the optional values.

:[C++]:

.. code-block:: c++

    Data(
    
        [const Name& name]
    
    );

:[JavaScript]:

.. code-block:: javascript

    var Data = function Data(
    
        [name         // Name]
    
    )

:[Python]:

.. code-block:: python

    def __init__(self
    
        [, name       // Name]
    
    )

:Parameters:

    - ``name``
	(optional) The name for the data packet.

Data.getContent Method
----------------------

Get content of the Data packet.

:[C++]:

.. code-block:: c++

    const Blob& getContent() const;

:[JavaScript]:

.. code-block:: javascript

    // Returns Blob
    Data.prototype.getContent = function()
    
:Returns:

    A pointer to the content byte array.

Data.setContent Method
----------------------

Set content to point to an existing byte array.

:[C++]:

.. code-block:: c++

    void setContent(
    
        const Blob& content
    
    );

:Parameters:

    - ``content``
	The pointer to the byte array.

Data.wireDecode Method
----------------------

Decode the input using a particular wire format and update this Data. If wireFormat is the default wire format, also set the defaultWireEncoding field to the input.

:[C++]:

.. code-block:: c++

    void wireDecode(
    
        const std::vector<uint8_t>& input
	[, WireFormat& wireFormat]
    
    );

:[JavaScript]:

.. code-block:: javascript

    ContentObject.prototype.decode = function(
    
        input // Uint8Array
        [, wireFormat // WireFormat]
    
    )

:Parameters:

    - ``input``
	The input byte array to be decoded.

    - ``wireFormat``
	(optional) A WireFormat object used to decode the input. If omitted, use WireFormat getDefaultWireFormat().

Data.wireEncode Method
----------------------

Encode this Data for a particular wire format. If wireFormat is the default wire format, also set the defaultWireEncoding field to the encoded result.

:[C++]:

.. code-block:: c++

    SignedBlob wireEncode(
    
        [WireFormat& wireFormat]
    
    ) const;

:[JavaScript]:

.. code-block:: javascript

    // Returns Uint8Array
    ContentObject.prototype.encode = function(
    
        [wireFormat // WireFormat]
    
    )

:Parameters:

    - wireFormat
	(optional) A WireFormat object used to encode the input. If omitted, use WireFormat getDefaultWireFormat ().

:Returns:

    The encoded byte array as a SignedBlob.
