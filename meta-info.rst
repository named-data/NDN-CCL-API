.. _MetaInfo:

MetaInfo Class
==============

The MetaInfo class is used by Data and represents the fields of an NDN 
MetaInfo. The MetaInfo type specifies the type of the content in the Data
packet (usually BLOB).

:[C++]:
    | ``#include <ndn-cpp/meta-info.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn``

:[Java]:
    Package: ``net.named_data.jndn``

MetaInfo Constructors
---------------------

MetaInfo Constructor (default)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a new MetaInfo where type is the default value BLOB.

:[C++]:

    .. code-block:: c++

        MetaInfo();

:[Python]:

    .. code-block:: python
    
        def __init__(self)

:[JavaScript]:

    .. code-block:: javascript

        var MetaInfo = function MetaInfo()

:[Java]:

    .. code-block:: java
    
        public MetaInfo()

MetaInfo Constructor (copy)
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a new MetaInfo as a deep copy of the given metaInfo.

:[C++]:

    .. code-block:: c++

        MetaInfo(
            const MetaInfo& metaInfo
        );

:[Python]:

    .. code-block:: python
    
        def __init__(self,
            metaInfo  # MetaInfo
        )

:[JavaScript]:

    .. code-block:: javascript

        var MetaInfo = function MetaInfo(
            metaInfo  // MetaInfo
        )

:[Java]:

    .. code-block:: java
    
        public MetaInfo(
            MetaInfo metaInfo
        )

:Parameters:

    - `metaInfo`
        The MetaInfo to copy.

MetaInfo Get Methods
--------------------

MetaInfo.getFinalBlockID Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get the final block ID.

:[C++]:

    .. code-block:: c++
    
        const Name::Component& getFinalBlockID() const;

:[Python]:

    .. code-block:: python
    
        # Returns Name.Component
        def getFinalBlockID(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns Name.Component
        MetaInfo.prototype.getFinalBlockID = function()

:[Java]:

    .. code-block:: java
    
        public final Name.Component getFinalBlockID()

:Returns:

    The final block ID as a Name.Component.  If the Name.Component 
    getValue().size() is 0, then the final block ID is not specified.

MetaInfo.getFreshnessPeriod Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get the data packet freshness period.

:[C++]:

    .. code-block:: c++
    
        Milliseconds getFreshnessPeriod() const;

:[Python]:

    .. code-block:: python
    
        # Returns float
        def getFreshnessPeriod(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        MetaInfo.prototype.getFreshnessPeriod = function()

:[Java]:

    .. code-block:: java
    
        public final double getFreshnessPeriod()

:Returns:

    The freshness period in milliseconds. If not specified, return ``-1`` 
    (C++ and Java) or ``None`` (Python) or ``undefined`` (JavaScript).

MetaInfo.getType Method
^^^^^^^^^^^^^^^^^^^^^^^

Get the content type.

:[C++]:

    .. code-block:: c++
    
        ndn_ContentType getType() const;

:[Python]:

    .. code-block:: python
    
        # Returns int
        def getType(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        MetaInfo.prototype.getType = function()

:[Java]:

    .. code-block:: java
    
        public final ContentType getType()

:Returns:

    The content type which is BLOB, LINK or KEY as follows:
    
        * C++: ``ndn_ContentType_BLOB``, ``ndn_ContentType_LINK`` or ``ndn_ContentType_KEY``
        * Python: ``ContentType.BLOB``, ``ContentType.LINK`` or ``ContentType.KEY``
        * JavaScript: ``ContentType.BLOB``, ``ContentType.LINK`` or ``ContentType.KEY``
        * Java: ``ContentType.BLOB``, ``ContentType.LINK`` or ``ContentType.KEY``

MetaInfo Set Methods
--------------------

MetaInfo.setFinalBlockID Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Set the final block ID.

:[C++]:

    .. code-block:: c++

        void setFinalBlockID(
            const Name::Component& finalBlockID
        );

:[Python]:

    .. code-block:: python
    
        def setFinalBlockID(self,
            finalBlockID  # Name.Component
        )

:[JavaScript]:

    .. code-block:: javascript

        MetaInfo.prototype.setFinalBlockID = function(
            finalBlockID  // Name.Component
        )

:[Java]:

    .. code-block:: java
    
        public final void setFinalBlockID(
            Name.Component finalBlockID
        )

:Parameters:

    - `finalBlockID`
        The final block ID as a Name.Component.  If not specified, set to a new 
        default Name.Component(), or to a Name.Component where getValue().size()
        is 0.

MetaInfo.setFreshnessPeriod Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Set the freshness period.

:[C++]:

    .. code-block:: c++

        void setFreshnessPeriod(
            Milliseconds freshnessPeriod
        );

:[Python]:

    .. code-block:: python
    
        def setFreshnessPeriod(self,
            freshnessPeriod  # float
        )

:[JavaScript]:

    .. code-block:: javascript

        MetaInfo.prototype.setFreshnessPeriod = function(
            freshnessPeriod  // number
        )

:[Java]:

    .. code-block:: java
    
        public final void setFreshnessPeriod(
            double freshnessPeriod
        )

:Parameters:

    - `freshnessPeriod`
        The freshness period in milliseconds. If not specified, set to ``-1`` 
        (C++ and Java) or ``None`` (Python) or ``undefined`` (JavaScript).

MetaInfo.setType Method
^^^^^^^^^^^^^^^^^^^^^^^

Set the content type.

:[C++]:

    .. code-block:: c++

        void setType(
            ndn_ContentType type
        );

:[Python]:

    .. code-block:: python
    
        def setType(self,
            type  # int
        )

:[JavaScript]:

    .. code-block:: javascript

        MetaInfo.prototype.setType = function(
            type  // number
        )

:[Java]:

    .. code-block:: java
    
        public final void setType(
            ContentType type
        )

:Parameters:

    - `type`

        The content type which is BLOB, LINK or KEY as follows:

            * C++: ``ndn_ContentType_BLOB``, ``ndn_ContentType_LINK`` or ``ndn_ContentType_KEY``
            * Python: ``ContentType.BLOB``, ``ContentType.LINK`` or ``ContentType.KEY``
            * JavaScript: ``ContentType.BLOB``, ``ContentType.LINK`` or ``ContentType.KEY``
            * Java: ``ContentType.BLOB``, ``ContentType.LINK`` or ``ContentType.KEY``
