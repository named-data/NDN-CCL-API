.. _Interest:

Interest Class
==============

:[C++]:
    Namespace: ``ndn``

:[Python]:
    Module: ``pyndn``

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

:[JavaScript]:

.. code-block:: javascript

    var Interest = function Interest (
    
        [name // Name]
    
    )

:[Python]:

.. code-block:: python

    def __init__(self
    
        [, name # Name]
    
    )

:Parameters:

    - ``name``
	(optional) The name of the content. If omitted, use a blank name.


Interest Constructor (copy)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a new interest as a deep copy of the given interest.

:[C++]:

.. code-block:: c++

    Interest(
    
        const Interest& interest
    
    );

:[JavaScript]:

.. code-block:: javascript

    var Interest = function Interest (
    
        interest // Interest
    
    )

:[Python]:

.. code-block:: python

    def __init__(self,
    
        interest # Interest
    
    )

:Parameters:

    - ``interest``
	The Interest to copy.

Interest.wireDecode Method
--------------------------

Decode the input from wire format and update this Interest.

:[C++]:

.. code-block:: c++

    void decode(
    
        const std::vector<uint8_t>& input
    
    );

:[JavaScript]:

.. code-block:: javascript

    Interest.prototype.decode = function(
    
        input         // Uint8Array
        
    )

:Parameters:

    - ``input``
	The input byte array to be decoded.


Interest.wireEncode Method
--------------------------

Encode this Interest to a wire format.

:[C++]:

.. code-block:: c++

    Blob encode() const;

:[JavaScript]:

.. code-block:: javascript

    // Returns Blob
    Interest.prototype.encode = function()

:Returns:

    The encoded byte array as a Blob.

Interest.matchesName Method
---------------------------

Return true if the components of this Interest’s name are the same as the leading components of the given name, and the name conforms to the interest selectors.

:[C++]:

.. code-block:: c++

    bool matchesName(
    
        const Name& name
    
    ) const;

:[JavaScript]:

.. code-block:: javascript

    // Returns boolean
    Interest.prototype.matchesName = function(
    
	name // Name
    
    )

:[Python]:

.. code-block:: python

    # Returns True or False
    def matches_name(self,
    
        name # Name
    
    )

:Parameters:

    - ``name``
	The Name to check against this Interest.

:Returns:

    True if this interest’s name and interest selectors match the name.

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

    :[JavaScript]:

    .. code-block:: javascript

        // Returns string
        Interest.prototype.toUri = function()

    :[Python]:

    .. code-block:: python

        # Returns str
        def toUri(self)

    :Returns:

        The URI string.
