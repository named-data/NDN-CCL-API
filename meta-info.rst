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

MetaInfo.getFinalBlockId Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get the final block ID.

:[C++]:

    .. code-block:: c++
    
        const Name::Component& getFinalBlockId() const;

:[Python]:

    .. code-block:: python
    
        # Returns Name.Component
        def getFinalBlockId(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns Name.Component
        MetaInfo.prototype.getFinalBlockId = function()

:[Java]:

    .. code-block:: java
    
        public final Name.Component getFinalBlockId()

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

.. _MetaInfo.getOtherTypeCode:

MetaInfo.getOtherTypeCode Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get the content type code from the packet which is other than a recognized
ContentType enum value. This is only meaningful if
:ref:`getType() <MetaInfo.getType>` is OTHER_CODE.

:[C++]:

    .. code-block:: c++

        int getOtherTypeCode() const;

:[Python]:

    .. code-block:: python

        # Returns int
        def getOtherTypeCode(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        MetaInfo.prototype.getOtherTypeCode = function()

:[Java]:

    .. code-block:: java

        public final int getOtherTypeCode()

:Returns:

    The type code.

.. _MetaInfo.getType:

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

    The content type enum value which is BLOB, LINK, KEY, NACK, or OTHER_CODE as follows.
    If this is OTHER_CODE, then call
    :ref:`getOtherTypeCode() <MetaInfo.getOtherTypeCode>` to get the unrecognized
    content type code.
    
        * C++: ``ndn_ContentType_BLOB``, ``ndn_ContentType_LINK``, ``ndn_ContentType_KEY``, ``ndn_ContentType_NACK`` or ``ndn_ContentType_OTHER_CODE``
        * Python: ``ContentType.BLOB``, ``ContentType.LINK``, ``ContentType.KEY``, ``ContentType.NACK`` or ``ContentType.OTHER_CODE``
        * JavaScript: ``ContentType.BLOB``, ``ContentType.LINK``, ``ContentType.KEY``, ``ContentType.NACK`` or ``ContentType.OTHER_CODE``
        * Java: ``ContentType.BLOB``, ``ContentType.LINK``, ``ContentType.KEY``, ``ContentType.NACK`` or ``ContentType.OTHER_CODE``

MetaInfo Set Methods
--------------------

MetaInfo.setFinalBlockId Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Set the final block ID.

:[C++]:

    .. code-block:: c++

        void setFinalBlockId(
            const Name::Component& finalBlockId
        );

:[Python]:

    .. code-block:: python
    
        def setFinalBlockId(self,
            finalBlockId  # Name.Component
        )

:[JavaScript]:

    .. code-block:: javascript

        MetaInfo.prototype.setFinalBlockId = function(
            finalBlockId  // Name.Component
        )

:[Java]:

    .. code-block:: java
    
        public final void setFinalBlockId(
            Name.Component finalBlockId
        )

:Parameters:

    - `finalBlockId`
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

.. _MetaInfo.setOtherTypeCode:

MetaInfo.setOtherTypeCode Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Set the packet's content type code to use when the content type enum is
OTHER_CODE. If the packet's content type code is a recognized enum value, just
call :ref:`setType() <MetaInfo.setType>`.

:[C++]:

    .. code-block:: c++

        void setOtherTypeCode(
            int otherTypeCode
        );

:[Python]:

    .. code-block:: python

        def setOtherTypeCode(self,
            otherTypeCode  # int
        )

:[JavaScript]:

    .. code-block:: javascript

        MetaInfo.prototype.setOtherTypeCode = function(
            otherTypeCode  // number
        )

:[Java]:

    .. code-block:: java

        public final void setOtherTypeCode(
            int otherTypeCode
        )

:Parameters:

    - `otherTypeCode`

        The packet's unrecognized content type code, which must be non-negative.

.. _MetaInfo.setType:

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

        The content type enum value which is BLOB, LINK, KEY or NACK as follows.
        If the packet's content type is not a recognized ContentType enum value,
        use OTHER_CODE and call :ref:`setOtherTypeCode() <MetaInfo.setOtherTypeCode>`.

            * C++: ``ndn_ContentType_BLOB``, ``ndn_ContentType_LINK``, ``ndn_ContentType_KEY``, ``ndn_ContentType_NACK`` or ``ndn_ContentType_OTHER_CODE``
            * Python: ``ContentType.BLOB``, ``ContentType.LINK``, ``ContentType.KEY``, ``ContentType.NACK`` or ``ContentType.OTHER_CODE``
            * JavaScript: ``ContentType.BLOB``, ``ContentType.LINK``, ``ContentType.KEY``, ``ContentType.NACK`` or ``ContentType.OTHER_CODE``
            * Java: ``ContentType.BLOB``, ``ContentType.LINK``, ``ContentType.KEY``, ``ContentType.NACK`` or ``ContentType.OTHER_CODE``
