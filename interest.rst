.. _Interest:

Interest Class
==============

:[C++]:
    Namespace: ``ndn``

:[Python]:
    Module: ``pyndn``

:[Java]:
    Package: ``net.named_data.jndn``

Interest Constructors
---------------------

Interest Constructor (optional Name)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a new Interest with the optional name.

:[C++]:

    .. code-block:: c++

        Interest(
            [const Name& name]
        );

:[Python]:

    .. code-block:: python

        def __init__(self
            [, name  # Name]
        )

:[JavaScript]:

    .. code-block:: javascript

        var Interest = function Interest (
            [name  // Name]
        )

:[Java]:

    .. code-block:: java
    
        public Interest(
            [Name name]
        )

:Parameters:

    - `name`
	(optional) The name for the interest which is copied. If omitted, use a blank name.


Interest Constructor (copy)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a new Interest as a deep copy of the given interest.

:[C++]:

    .. code-block:: c++

        Interest(
            const Interest& interest
        );

:[Python]:

    .. code-block:: python

        def __init__(self,
            interest  # Interest
        )

:[JavaScript]:

    .. code-block:: javascript

        var Interest = function Interest (
            interest  // Interest
        )

:[Java]:

    .. code-block:: java
    
        public Interest(
            Interest interest
        )

:Parameters:

    - `interest`
	The Interest to copy.

Interest.wireDecode Method
--------------------------

Decode the input from wire format and update this Interest.

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

        Interest.prototype.wireDecode = function(
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


Interest.wireEncode Method
--------------------------

Encode this Interest to a wire format.

:[C++]:

    .. code-block:: c++

        SignedBlob wireEncode() const;

:[Python]:

    .. code-block:: python

        def wireEncode()

:[JavaScript]:

    .. code-block:: javascript

        // Returns Blob
        Interest.prototype.wireEncode = function()

:[Java]:

    .. code-block:: java
    
        public final Blob wireEncode()

:Returns:

    The encoded byte array as a Blob.

Interest.matchesName Method
---------------------------

Return true if the components of this Interest's name are the same as the leading components of the given name, and the name conforms to the interest selectors.

:[C++]:

    .. code-block:: c++

        bool matchesName(
            const Name& name
        ) const;

:[Python]:

    .. code-block:: python

        # Returns True or False
        def matchesName(self,
            name  # Name
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns boolean
        Interest.prototype.matchesName = function(
            name  // Name
        )

:[Java]:

    .. code-block:: java
    
        public final boolean matchesName(
            Name name
        )

:Parameters:

    - `name`
	The Name to check against this Interest.

:Returns:

    True if this interest's name and interest selectors match the name.

Interest.toUri Method
--------------------------

.. container:: experimental

    .. admonition:: Experimental

       This method is experimental.  The NDN specifications don't officially 
       define how to add interest selectors to a URI.

    Encode the name according to the "NDN URI Scheme".  If there are interest 
    selectors, append "?" and add the selectors as a query string.  For example
    "/test/name?ndn.ChildSelector=1".

    :[C++]:

      .. code-block:: c++

          std::string toUri() const;

    :[Python]:

      .. code-block:: python

          # Returns str
          def toUri(self)

    :[JavaScript]:

      .. code-block:: javascript

          // Returns string
          Interest.prototype.toUri = function()
          
    :[Java]:

        .. code-block:: java

            public final String toUri()

    :Returns:

        The URI string.
