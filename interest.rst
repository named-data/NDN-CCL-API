.. _Interest:

Interest Class
==============

The Interest class represents an NDN Interest packet.

:[C++]:
    | ``#include <ndn-cpp/interest.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn``

:[Java]:
    Package: ``net.named_data.jndn``

.. note::

    You don't have to set the interest nonce. A nonce is automatically
    generated when the interest is wire encoded.

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
^^^^^^^^^^^^^^^^^^^^^^^^^^^

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

        var Interest = function Interest(
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

Interest Get Methods
--------------------

Interest.getChildSelector Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get the child selector.

:[C++]:

    .. code-block:: c++

        int getChildSelector() const;

:[Python]:

    .. code-block:: python
    
        # Returns int
        def getChildSelector(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        Interest.prototype.getChildSelector = function()

:[Java]:

    .. code-block:: java
    
        public final int getChildSelector()

:Returns:

    The child selector. If not specified, return ``-1`` (C++ and Java)
    or ``None`` (Python) or ``undefined`` (JavaScript).

Interest.getExclude Method
^^^^^^^^^^^^^^^^^^^^^^^^^^

Get the interest :ref:`Exclude <Exclude>` object.

:[C++]:

    .. code-block:: c++

        Exclude& getExclude();

        const Exclude& getExclude() const;

:[Python]:

    .. code-block:: python
    
        # Returns Exclude
        def getExclude(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns Exclude
        Interest.prototype.getExclude = function()

:[Java]:

    .. code-block:: java
    
        public final Exclude getExclude()

:Returns:

    The :ref:`Exclude <Exclude>` object. If not specified, the exclude size() is 0.

Interest.getIncomingFaceId Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get the incoming face ID according to the incoming packet header (if the
forwarder is configured to include it in the header).

:[C++]:

    .. code-block:: c++

        uint64_t getIncomingFaceId() const;

:[Python]:

    .. code-block:: python

        # Returns int
        def getIncomingFaceId(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        Interest.prototype.getIncomingFaceId = function()

:[Java]:

    .. code-block:: java

        public final long getIncomingFaceId()

:Returns:

    The incoming face ID. If not specified, return ``(uint64_t)-1`` (C++)
    or ``None`` (Python) or ``undefined`` (JavaScript) or ``-1`` (Java).

Interest.getInterestLifetimeMilliseconds Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get the interest lifetime.

:[C++]:

    .. code-block:: c++

        Milliseconds getInterestLifetimeMilliseconds() const;

:[Python]:

    .. code-block:: python
    
        # Returns float
        def getInterestLifetimeMilliseconds(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        Interest.prototype.getInterestLifetimeMilliseconds = function()

:[Java]:

    .. code-block:: java
    
        public final double getInterestLifetimeMilliseconds()

:Returns:

    The interest lifetime in milliseconds. If not specified, return ``-1`` (C++ and Java)
    or ``None`` (Python) or ``undefined`` (JavaScript).

Interest.getKeyLocator Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get the interest :ref:`KeyLocator <KeyLocator>` object.

:[C++]:

    .. code-block:: c++

        KeyLocator& getKeyLocator();

        const KeyLocator& getKeyLocator() const;

:[Python]:

    .. code-block:: python
    
        # Returns KeyLocator
        def getKeyLocator(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns KeyLocator
        Interest.prototype.getKeyLocator = function()

:[Java]:

    .. code-block:: java
    
        public final KeyLocator getKeyLocator()

:Returns:

    The :ref:`KeyLocator <KeyLocator>` object. If not specified, the 
    key locator getType() is not specified.

Interest.getMaxSuffixComponents Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get the max suffix components count.

.. note::

    The suffix components count includes the implicit digest component of the full
    name in the data packet. For example, if the interest name is the prefix
    /a/b and the data packet name is /a/b/c, then the data packet name has 2
    suffix components: "c" and the implicit digest which is not shown.

:[C++]:

    .. code-block:: c++

        int getMaxSuffixComponents() const;

:[Python]:

    .. code-block:: python
    
        # Returns int
        def getMaxSuffixComponents(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        Interest.prototype.getMaxSuffixComponents = function()

:[Java]:

    .. code-block:: java
    
        public final int getMaxSuffixComponents()

:Returns:

    The max suffix components count. If not specified, return ``-1`` (C++ and Java)
    or ``None`` (Python) or ``undefined`` (JavaScript).

Interest.getMinSuffixComponents Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get the min suffix components count.

.. note::

    The suffix components count includes the implicit digest component of the full
    name in the data packet. For example, if the interest name is the prefix
    /a/b and the data packet name is /a/b/c, then the data packet name has 2
    suffix components: "c" and the implicit digest which is not shown.

:[C++]:

    .. code-block:: c++

        int getMinSuffixComponents() const;

:[Python]:

    .. code-block:: python
    
        # Returns int
        def getMinSuffixComponents(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        Interest.prototype.getMinSuffixComponents = function()

:[Java]:

    .. code-block:: java
    
        public final int getMinSuffixComponents()

:Returns:

    The min suffix components count. If not specified, return ``-1`` (C++ and Java)
    or ``None`` (Python) or ``undefined`` (JavaScript).

Interest.getMustBeFresh Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get the MustBeFresh flag.

:[C++]:

    .. code-block:: c++

        bool getMustBeFresh() const;

:[Python]:

    .. code-block:: python
    
        # Returns bool
        def getMustBeFresh(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns boolean
        Interest.prototype.getMustBeFresh = function()

:[Java]:

    .. code-block:: java
    
        public final boolean getMustBeFresh()

:Returns:

    True if must be fresh, otherwise false. If not specified, the default is 
    true.

Interest.getName Method
^^^^^^^^^^^^^^^^^^^^^^^

Get the interest name.

:[C++]:

    .. code-block:: c++

        Name& getName();

        const Name& getName() const;

:[Python]:

    .. code-block:: python
    
        # Returns Name
        def getName(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns Name
        Interest.prototype.getName = function()

:[Java]:

    .. code-block:: java
    
        public final Name getName()

:Returns:

    The name. If not specified, the name size() is 0.

Interest.getNonce Method
^^^^^^^^^^^^^^^^^^^^^^^^

Get the nonce value from the incoming interest.  If you change any of the fields
in this Interest object, then the nonce value is cleared.

.. note::

    When you create an interest, you don't have to set the nonce. A nonce is 
    automatically generated when the interest is wire encoded.

:[C++]:

    .. code-block:: c++

        const Blob& getNonce() const;

:[Python]:

    .. code-block:: python
    
        # Returns Blob
        def getNonce(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns Blob
        Interest.prototype.getNonce = function()

:[Java]:

    .. code-block:: java
    
        public final Blob getNonce()

:Returns:

    The nonce. If not specified, the value :ref:`isNull() <isNull>`.

Interest Set Methods
--------------------

Interest.setChildSelector Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Set the child selector.

:[C++]:

    .. code-block:: c++

        Interest& setChildSelector(
            int childSelector
        );

:[Python]:

    .. code-block:: python
    
        # Returns Interest
        def setChildSelector(self,
            childSelector  # int
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns Interest
        Interest.prototype.setChildSelector = function(
            childSelector  // number
        )

:[Java]:

    .. code-block:: java
    
        public final Interest setChildSelector(
            int childSelector
        )

:Parameters:

    - `childSelector`
        The child selector. If not specified, set to ``-1`` (C++ and Java)
        or ``None`` (Python) or ``undefined`` (JavaScript).

:Returns:

    This Interest so that you can chain calls to update values.

Interest.setExclude Method
^^^^^^^^^^^^^^^^^^^^^^^^^^

Set this interest to use a copy of the given :ref:`Exclude <Exclude>` object.

.. note::

    You can also call getExclude and change the exclude entries directly.

:[C++]:

    .. code-block:: c++

        Interest& setExclude(
            const Exclude& exclude
        );

:[Python]:

    .. code-block:: python
    
        # Returns Interest
        def setExclude(self,
            exclude  # Exclude
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns Interest
        Interest.prototype.setExclude = function(
            exclude  // Exclude
        )

:[Java]:

    .. code-block:: java
    
        public final Interest setExclude(
            Exclude exclude
        )

:Parameters:

    - `exclude`
        The :ref:`Exclude <Exclude>` object. This makes a copy of the object. 
        If no exclude is specified, set to a new default Exclude(), or to an 
        Exclude with size() 0.

:Returns:

    This Interest so that you can chain calls to update values.

Interest.setInterestLifetimeMilliseconds Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Set the interest lifetime.

:[C++]:

    .. code-block:: c++

        Interest& setInterestLifetimeMilliseconds(
            Milliseconds interestLifetimeMilliseconds
        );

:[Python]:

    .. code-block:: python
    
        # Returns Interest
        def setInterestLifetimeMilliseconds(self,
            interestLifetimeMilliseconds  # float
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns Interest
        Interest.prototype.setInterestLifetimeMilliseconds = function(
            interestLifetimeMilliseconds  // number
        )

:[Java]:

    .. code-block:: java
    
        public final Interest setInterestLifetimeMilliseconds(
            double interestLifetimeMilliseconds
        )

:Parameters:

    - `interestLifetimeMilliseconds`
        The interest lifetime in milliseconds. If not specified, set to ``-1`` (C++ and Java)
        or ``None`` (Python) or ``undefined`` (JavaScript).

:Returns:

    This Interest so that you can chain calls to update values.

Interest.setKeyLocator Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Set this interest to use a copy of the given :ref:`KeyLocator <KeyLocator>` object.

.. note::

    You can also call getKeyLocator and change the key locator directly.

:[C++]:

    .. code-block:: c++

        Interest& setKeyLocator(
            const KeyLocator& keyLocator
        );

:[Python]:

    .. code-block:: python
    
        # Returns Interest
        def setKeyLocator(self,
            keyLocator  # KeyLocator
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns Interest
        Interest.prototype.setKeyLocator = function(
            keyLocator  // KeyLocator
        )

:[Java]:

    .. code-block:: java
    
        public final Interest setKeyLocator(
            KeyLocator keyLocator
        )

:Parameters:

    - `keyLocator`
        The :ref:`KeyLocator <KeyLocator>` object. This makes a copy of the object. 
        If no key locator is specified, set to a new default KeyLocator(), or to a 
        KeyLocator with an unspecified type.

:Returns:

    This Interest so that you can chain calls to update values.

Interest.setMustBeFresh Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Set the MustBeFresh flag.

:[C++]:

    .. code-block:: c++

        Interest& setMustBeFresh(
            bool mustBeFresh
        );

:[Python]:

    .. code-block:: python
    
        # Returns Interest
        def setMustBeFresh(self,
            mustBeFresh  # bool
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns Interest
        Interest.prototype.setMustBeFresh = function(
            mustBeFresh  // boolean
        )

:[Java]:

    .. code-block:: java
    
        public final Interest setMustBeFresh(
            boolean mustBeFresh
        )

:Parameters:

    - `mustBeFresh`
        True if the content must be fresh, otherwise false. If you do not set
        this flag, the default value is true.

:Returns:

    This Interest so that you can chain calls to update values.

Interest.setMaxSuffixComponents Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Set the max suffix components count.

.. note::

    The suffix components count includes the implicit digest component of the full
    name in the data packet. For example, if the interest name is the prefix
    /a/b and the data packet name is /a/b/c, then the data packet name has 2
    suffix components: "c" and the implicit digest which is not shown.

:[C++]:

    .. code-block:: c++

        Interest& setMaxSuffixComponents(
            int maxSuffixComponents
        );

:[Python]:

    .. code-block:: python
    
        # Returns Interest
        def setMaxSuffixComponents(self,
            maxSuffixComponents  # int
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns Interest
        Interest.prototype.setMaxSuffixComponents = function(
            maxSuffixComponents  // number
        )

:[Java]:

    .. code-block:: java
    
        public final Interest setMaxSuffixComponents(
            int maxSuffixComponents
        )

:Parameters:

    - `maxSuffixComponents`
        The max suffix components count. If not specified, set to ``-1`` (C++ and Java)
        or ``None`` (Python) or ``undefined`` (JavaScript).

:Returns:

    This Interest so that you can chain calls to update values.

Interest.setMinSuffixComponents Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Set the min suffix components count.

.. note::

    The suffix components count includes the implicit digest component of the full
    name in the data packet. For example, if the interest name is the prefix
    /a/b and the data packet name is /a/b/c, then the data packet name has 2
    suffix components: "c" and the implicit digest which is not shown.

:[C++]:

    .. code-block:: c++

        Interest& setMinSuffixComponents(
            int minSuffixComponents
        );

:[Python]:

    .. code-block:: python
    
        # Returns Interest
        def setMinSuffixComponents(self,
            minSuffixComponents  # int
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns Interest
        Interest.prototype.setMinSuffixComponents = function(
            minSuffixComponents  // number
        )

:[Java]:

    .. code-block:: java
    
        public final Interest setMinSuffixComponents(
            int minSuffixComponents
        )

:Parameters:

    - `minSuffixComponents`
        The min suffix components count. If not specified, set to ``-1`` (C++ and Java)
        or ``None`` (Python) or ``undefined`` (JavaScript).

:Returns:

    This Interest so that you can chain calls to update values.

Interest.setName Method
^^^^^^^^^^^^^^^^^^^^^^^

Set the interest name.

.. note::

    You can also call getName and change the name values directly.

:[C++]:

    .. code-block:: c++

        Interest& setName(
            const Name& name
        );

:[Python]:

    .. code-block:: python
    
        # Returns Interest
        def setName(self,
            name  # Name
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns Interest
        Interest.prototype.setName = function(
            name  // Name
        )

:[Java]:

    .. code-block:: java
    
        public final Interest setName(
            Name name
        )

:Parameters:

    - `name`
        The interest name. This makes a copy of the name.

:Returns:

    This Interest so that you can chain calls to update values.

Interest.matchesData Method
---------------------------

Check if the given Data packet can satisfy this Interest. This method considers
the Name, MinSuffixComponents, MaxSuffixComponents, PublisherPublicKeyLocator,
and Exclude. It does not consider the ChildSelector or MustBeFresh.

:[C++]:

    .. code-block:: c++

        bool matchesData(
            const Data& data
        ) const;

:[Python]:

    .. code-block:: python

        # Returns True or False
        def matchesData(self,
            data  # Data
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns boolean
        Interest.prototype.matchesData = function(
            data  // Data
        )

:[Java]:

    .. code-block:: java

        public final boolean matchesData(
            Data data
        )

:Parameters:

    - `data`
	The Data packet to check.

:Returns:

    True if the given Data packet can satisfy this Interest.

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

Interest.refreshNonce Method
----------------------------

Update the bytes of the nonce with new random values. This ensures that the new
nonce value is different than the current one. If the current nonce is not
specified, this does nothing.

:[C++]:

    .. code-block:: c++

        void refreshNonce();

:[Python]:

    .. code-block:: python

        def refreshNonce(self)

:[JavaScript]:

    .. code-block:: javascript

        Interest.prototype.refreshNonce = function()

:[Java]:

    .. code-block:: java

        public final void refreshNonce()

Interest.toUri Method
---------------------

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

Interest.wireDecode Methods
---------------------------

Interest.wireDecode Method (from Blob)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Decode the input from wire format and update this Interest.  Also keep a pointer
to the immutable input Blob for later use.

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

        Interest.prototype.wireDecode = function(
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

Interest.wireDecode Method (copy from byte array)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Decode the input from wire format and update this Interest.

:[C++]:

    .. code-block:: c++

        void wireDecode(
            const std::vector<uint8_t>& input
        );

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

        # Returns SignedBlob
        def wireEncode()

:[JavaScript]:

    .. code-block:: javascript

        // Returns SignedBlob
        Interest.prototype.wireEncode = function()

:[Java]:

    .. code-block:: java
    
        public final SignedBlob wireEncode()

:Returns:

    The encoded byte array as a SignedBlob.
