.. _Data:

Data Class
==========

:[C++]:
    | ``#include <ndn-cpp/data.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn``

:[Java]:
    Package: ``net.named_data.jndn``

Data Constructor
----------------

Create a new Data object with the optional name.

:[C++]:

    .. code-block:: c++

        Data(
            [const Name& name]
        );

:[Python]:

    .. code-block:: python

        def __init__(self
            [, name  # Name]
        )

:[JavaScript]:

    .. code-block:: javascript

        var Data = function Data(
            [name  // Name]
        )

:[Java]:

    .. code-block:: java
    
        public Data(
            [Name name]
        )

:Parameters:

    - `name`
        (optional) The name for the data packet. If omitted, use a blank name.

Data.getContent Method
----------------------

Get content of the Data packet.

:[C++]:

    .. code-block:: c++

        const Blob& getContent() const;

:[Python]:

    .. code-block:: python

        # Returns Blob
        def getContent(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns Blob
        Data.prototype.getContent = function()

:[Java]:

    .. code-block:: java
    
        public final Blob getContent()
    
:Returns:

    The data packet content as a Blob.

Data.setContent Method
----------------------

Set the content to the given value.

:[C++]:

    .. code-block:: c++

        void setContent(
            const Blob& content
        );

:[Python]:

    .. code-block:: python

        def setContent(self,
            content  # Blob
        )

:[JavaScript]:

    .. code-block:: javascript

        Data.prototype.setContent = function(
            content  // Blob
        )

:[Java]:

    .. code-block:: java
    
        public final void setContent(
            Blob content
        )

:Parameters:

    - `content`
        A Blob with the content.

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

:[Python]:

    .. code-block:: python

        def wireDecode(self,
            input  # Blob
        )

:[JavaScript]:

    .. code-block:: javascript

        Data.prototype.wireDecode = function(
            input  // Blob
        )

:[Java]:

    .. code-block:: java
    
        public final void wireDecode(
            Blob content
        )

:Parameters:

    - `input`
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

    .. code-block:: c++

        void wireDecode(
            const uint8_t *input,
            size_t inputLength
        );

:[Python]:

    .. code-block:: python

        def wireDecode(self,
            input  # an array type with int elements
        )

:[JavaScript]:

    .. code-block:: javascript

        Data.prototype.wireDecode = function(
            input  // Buffer
        )

:[Java]:

    .. code-block:: java
    
        public final void wireDecode(
            ByteBuffer input
        )

:Parameters:

    - `input`
        The input byte array to be decoded.

Data.wireEncode Method
----------------------

Encode this Data to wire format.

:[C++]:

    .. code-block:: c++

        SignedBlob wireEncode() const;

:[Python]:

    .. code-block:: python

        # Returns SignedBlob
        def wireEncode()

:[JavaScript]:

    .. code-block:: javascript

        // Returns SignedBlob
        Data.prototype.wireEncode = function()

:[Java]:

    .. code-block:: java
    
        public final SignedBlob wireEncode()

:Returns:

    The encoded byte array as a SignedBlob.
