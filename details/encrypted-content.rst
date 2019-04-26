.. _EncryptedContent:

EncryptedContent Class
======================

.. container:: experimental

    .. admonition:: Experimental

       The EncryptedContent class is experimental and the API is not finalized.

    An EncryptedContent holds a payload and other fields representing encrypted
    content for Name-based Access Control.

    :[C++]:
        | ``#include <ndn-cpp/encrypt/encrypted-content.hpp>``
        | Namespace: ``ndn``

    :[Python]:
        Module: ``pyndn.encrypt``

    :[Java]:
        Package: ``net.named_data.jndn.encrypt``

EncryptedContent Constructors
-----------------------------

EncryptedContent Constructor (default)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: experimental

    .. admonition:: Experimental

       The EncryptedContent class is experimental and the API is not finalized.

    Create an EncryptedContent where all the values are unspecified. You can
    initialize the object with wireDecodeV2.

    :[C++]:

        .. code-block:: c++

            EncryptedContent();

    :[Python]:

        .. code-block:: python

            def __init__(self)

    :[JavaScript]:

        .. code-block:: javascript

            var EncryptedContent = function EncryptedContent()

    :[Java]:

        .. code-block:: java

            public EncryptedContent()

EncryptedContent Constructor (copy)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: experimental

    .. admonition:: Experimental

       The EncryptedContent class is experimental and the API is not finalized.

    Create a new EncryptedContent as a deep copy of the given object.

    :[C++]:

        .. code-block:: c++

            EncryptedContent(
                const EncryptedContent& encryptedContent
            );

    :[Python]:

        .. code-block:: python

            def __init__(self,
                encryptedContent  # EncryptedContent
            )

    :[JavaScript]:

        .. code-block:: javascript

            var EncryptedContent = function EncryptedContent(
                encryptedContent  // EncryptedContent
            )

    :[Java]:

        .. code-block:: java

            public EncryptedContent(
                EncryptedContent encryptedContent
            )

    :Parameters:

        - `encryptedContent`
            The other EncryptedContent to copy.

EncryptedContent Get Methods
----------------------------

EncryptedContent.getInitialVector Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: experimental

    .. admonition:: Experimental

       The EncryptedContent class is experimental and the API is not finalized.

    Get the initial vector.

    :[C++]:

        .. code-block:: c++

            const Blob& getInitialVector() const;

    :[Python]:

        .. code-block:: python

            # Returns Blob
            def getInitialVector(self)

    :[JavaScript]:

        .. code-block:: javascript

            // Returns Blob
            EncryptedContent.prototype.getInitialVector = function()

    :[Java]:

        .. code-block:: java

            public final Blob getInitialVector()

    :Returns:

        The initial vector. If not specified, isNull() is true.

EncryptedContent.getKeyLocatorName Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: experimental

    .. admonition:: Experimental

       The EncryptedContent class is experimental and the API is not finalized.

    Check that the key locator type is KEYNAME and return the key Name.

    :[C++]:

        .. code-block:: c++

            const Name& getKeyLocatorName() const;

    :[Python]:

        .. code-block:: python

            # Returns Name
            def getKeyLocatorName(self)

    :[JavaScript]:

        .. code-block:: javascript

            // Returns Name
            EncryptedContent.prototype.getKeyLocatorName = function()

    :[Java]:

        .. code-block:: java

            public final Name getKeyLocatorName()

    :Returns:

        The key Name.

    :Throw:

        Throw an exception if the key locator type is not KEYNAME.

EncryptedContent.getPayload Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: experimental

    .. admonition:: Experimental

       The EncryptedContent class is experimental and the API is not finalized.

    Get the unencrypted payload.

    :[C++]:

        .. code-block:: c++

            const Blob& getPayload() const;

    :[Python]:

        .. code-block:: python

            # Returns Blob
            def getPayload(self)

    :[JavaScript]:

        .. code-block:: javascript

            // Returns Blob
            EncryptedContent.prototype.getPayload = function()

    :[Java]:

        .. code-block:: java

            public final Blob getPayload()

    :Returns:

        The payload. If not specified, isNull() is true.

EncryptedContent.getPayloadKey Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: experimental

    .. admonition:: Experimental

       The EncryptedContent class is experimental and the API is not finalized.

    Get the encrypted payload key.

    :[C++]:

        .. code-block:: c++

            const Blob& getPayloadKey() const;

    :[Python]:

        .. code-block:: python

            # Returns Blob
            def getPayloadKey(self)

    :[JavaScript]:

        .. code-block:: javascript

            // Returns Blob
            EncryptedContent.prototype.getPayloadKey = function()

    :[Java]:

        .. code-block:: java

            public final Blob getPayloadKey()

    :Returns:

        The encrypted payload key. If not specified, isNull() is true.

EncryptedContent.wireDecodeV2 Methods
-------------------------------------

EncryptedContent.wireDecodeV2 Method (from Blob)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: experimental

    .. admonition:: Experimental

       The EncryptedContent class is experimental and the API is not finalized.

    Decode the input as an EncryptedContent v2 and update this EncryptedContent.
    (The wireDecode() method was for API version 1 which is deprecated.)

    :[C++]:

        .. code-block:: c++

            void wireDecodeV2(
                const Blob& input
            );

    :[Python]:

        .. code-block:: python

            def wireDecodeV2(self,
                input  # Blob
            )

    :[JavaScript]:

        .. code-block:: javascript

            EncryptedContent.prototype.wireDecodeV2 = function(
                input  // Blob
            )

    :[Java]:

        .. code-block:: java

            public final void wireDecodeV2(
                Blob content
            )

    :Parameters:

        - `input`
            The immutable input byte array to be decoded.

EncryptedContent.wireDecodeV2 Method (from byte array)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: experimental

    .. admonition:: Experimental

       The EncryptedContent class is experimental and the API is not finalized.

    Decode the input as an EncryptedContent v2 and update this EncryptedContent.
    (The wireDecode() method was for API version 1 which is deprecated.)

    :[C++]:

        .. code-block:: c++

            void wireDecodeV2(
                const std::vector<uint8_t>& input
            );

            void wireDecodeV2(
                const uint8_t *input,
                size_t inputLength
            );

    :[Python]:

        .. code-block:: python

            def wireDecodeV2(self,
                input  # an array type with int elements
            )

    :[JavaScript]:

        .. code-block:: javascript

            EncryptedContent.prototype.wireDecodeV2 = function(
                input  // Buffer
            )

    :[Java]:

        .. code-block:: java

            public final void wireDecodeV2(
                ByteBuffer input
            )

    :Parameters:

        - `input`
            The input byte array to be decoded.
