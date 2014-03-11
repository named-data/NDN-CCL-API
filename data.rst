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
    
        [, name       # Name]
    
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

Data.wireDecode Methods
-----------------------

Data.wireDecode Method (from Blob)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Decode the input from wire format and update this Data.  Also keep a pointer to the immutable input Blob for later use. 

:[C++]:

.. code-block:: c++

    void wireDecode(
    
        const Blob& input
    
    );

:[JavaScript]:

.. code-block:: javascript

    ContentObject.prototype.decode = function(
    
        input // Uint8Array
    
    )

:Parameters:

    - ``input``
	The immutable input byte array to be decoded.

Data.wireDecode Method (copy from byte array)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Decode the input from wire format and update this Data.  Also save a copy of the input for later use. 
(To not copy the input, see wireDecode(Blob).)

:[C++]:

.. code-block:: c++

    void wireDecode(
    
        const std::vector<uint8_t>& input
    
    );

:[JavaScript]:

.. code-block:: javascript

    ContentObject.prototype.decode = function(
    
        input // Uint8Array
    
    )

:Parameters:

    - ``input``
	The input byte array to be decoded.

Data.wireEncode Method
----------------------

Encode this Data to wire format.

:[C++]:

.. code-block:: c++

    SignedBlob wireEncode() const;

:[JavaScript]:

.. code-block:: javascript

    // Returns SignedBlob
    ContentObject.prototype.encode = function()

:Returns:

    The encoded byte array as a SignedBlob.
