.. _KeyLocator:

KeyLocator Class
================

The KeyLocator class represents an NDN KeyLocator which is used in a 
Sha256WithRsaSignature and Interest selectors.

:[C++]:
    | ``#include <ndn-cpp/key-locator.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn``

:[Java]:
    Package: ``net.named_data.jndn``

KeyLocator Constructors
-----------------------

KeyLocator Constructor (default)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a new KeyLocator with an unspecified type.

:[C++]:

    .. code-block:: c++

        KeyLocator();

:[Python]:

    .. code-block:: python
    
        def __init__(self)

:[JavaScript]:

    .. code-block:: javascript

        var KeyLocator = function KeyLocator()

:[Java]:

    .. code-block:: java
    
        public KeyLocator()

KeyLocator Constructor (copy)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a new KeyLocator as a deep copy of the given key locator.

:[C++]:

    .. code-block:: c++

        KeyLocator(
            const KeyLocator& keyLocator
        );

:[Python]:

    .. code-block:: python
    
        def __init__(self,
            keyLocator  # KeyLocator
        )

:[JavaScript]:

    .. code-block:: javascript

        var KeyLocator = function KeyLocator(
            keyLocator  // KeyLocator
        )

:[Java]:

    .. code-block:: java
    
        public KeyLocator(
            KeyLocator keyLocator
        )

:Parameters:

    - `keyLocator`
        The KeyLocator to copy.

KeyLocator Get Methods
----------------------

KeyLocator.getKeyData Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get the key data. This is the digest bytes if getType() is KEY_LOCATOR_DIGEST.

:[C++]:

    .. code-block:: c++

        const Blob& getKeyData() const;

:[Python]:

    .. code-block:: python

        # Returns Blob
        def getKeyData(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns Blob
        KeyLocator.prototype.getKeyData = function()

:[Java]:

    .. code-block:: java
    
        public final Blob getKeyData()
    
:Returns:

    The key data as a Blob (only valid if getType() is KEY_LOCATOR_DIGEST).

KeyLocator.getKeyName Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Get the key name (only valid if getType() is KEYNAME).

:[C++]:

    .. code-block:: c++

        const Name& getKeyName() const;

        Name& getKeyName();

:[Python]:

    .. code-block:: python

        # Returns Name
        def getKeyName(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns Name
        KeyLocator.prototype.getKeyName = function()

:[Java]:

    .. code-block:: java
    
        public final Name getKeyName()
    
:Returns:

    The key name (only valid if getType() is KEYNAME).

KeyLocator.getType Method
^^^^^^^^^^^^^^^^^^^^^^^^^

Get the key locator type. For KEYNAME, you may also call getKeyName(). For
KEY_LOCATOR_DIGEST, you may also call getKeyData() to get the digest.

:[C++]:

    .. code-block:: c++
    
        ndn_KeyLocatorType getType() const;

:[Python]:

    .. code-block:: python
    
        # Returns int
        def getType(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        KeyLocator.prototype.getType = function()

:[Java]:

    .. code-block:: java
    
        public final KeyLocatorType getType()

:Returns:

    The key locator type which is KEYNAME or KEY_LOCATOR_DIGEST as follows:
    
        * C++: ``ndn_KeyLocatorType_KEYNAME`` or ``ndn_KeyLocatorType_KEY_LOCATOR_DIGEST``
        * Python: ``KeyLocatorType.KEYNAME`` or ``KeyLocatorType.KEY_LOCATOR_DIGEST``
        * JavaScript: ``KeyLocatorType.KEYNAME`` or ``KeyLocatorType.KEY_LOCATOR_DIGEST``
        * Java: ``KeyLocatorType.KEYNAME`` or ``KeyLocatorType.KEY_LOCATOR_DIGEST``
        
    If not specified, return ``-1`` (C++) or ``KeyLocatorType.NONE`` (Java) or 
    ``None`` (Python) or ``undefined`` (JavaScript).

KeyLocator Set Methods
----------------------

KeyLocator.setKeyData Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Set the key data to the given value. This is the digest bytes if getType() is 
KEY_LOCATOR_DIGEST.

:[C++]:

    .. code-block:: c++

        void setKeyData(
            const Blob& keyData
        );

:[Python]:

    .. code-block:: python

        def setKeyData(self,
            keyData  # Blob
        )

:[JavaScript]:

    .. code-block:: javascript

        Data.prototype.setKeyData = function(
            keyData  // Blob
        )

:[Java]:

    .. code-block:: java
    
        public final void setKeyData(
            Blob keyData
        )

:Parameters:

    - `keyData`
        A Blob with the key data bytes.

KeyLocator.setKeyName Method
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Set the key name to a copy of the given Name. This is the name if getType() is 
KEYNAME.

.. note::

    You can also call getKeyName and change the name values directly.

:[C++]:

    .. code-block:: c++

        void setKeyName(
            const Name& name;
        );

:[Python]:

    .. code-block:: python
    
        def setKeyName(self,
            name  # Name
        )

:[JavaScript]:

    .. code-block:: javascript

        KeyLocator.prototype.setKeyName = function(
            name  // Name
        )

:[Java]:

    .. code-block:: java
    
        public final void setKeyName(
            Name name;
        )

:Parameters:

    - `name`
        The key name. This makes a copy of the name.

KeyLocator.setType Method
^^^^^^^^^^^^^^^^^^^^^^^^^

Set the key locator type. If the type is KEYNAME, you must also call 
setKeyName(). If the type is KEY_LOCATOR_DIGEST, you must also call
setKeyData() to set the digest.

:[C++]:

    .. code-block:: c++

        void setType(
            ndn_KeyLocatorType type;
        );

:[Python]:

    .. code-block:: python
    
        def setType(self,
            type  # int
        )

:[JavaScript]:

    .. code-block:: javascript

        KeyLocator.prototype.setType = function(
            type  // number
        )

:[Java]:

    .. code-block:: java
    
        public final void setType(
            KeyLocatorType type;
        )

:Parameters:

    - `type`

        The key locator type which is KEYNAME or KEY_LOCATOR_DIGEST as follows:

            * C++: ``ndn_KeyLocatorType_KEYNAME`` or ``ndn_KeyLocatorType_KEY_LOCATOR_DIGEST``
            * Python: ``KeyLocatorType.KEYNAME`` or ``KeyLocatorType.KEY_LOCATOR_DIGEST``
            * JavaScript: ``KeyLocatorType.KEYNAME`` or ``KeyLocatorType.KEY_LOCATOR_DIGEST``
            * Java: ``KeyLocatorType.KEYNAME`` or ``KeyLocatorType.KEY_LOCATOR_DIGEST``

        If not specified, set to ``-1`` (C++) or ``KeyLocatorType.NONE`` (Java) or 
        ``None`` (Python) or ``undefined`` (JavaScript).

KeyLocator.clear Method
-----------------------

Clear the keyData and keyName, and set the type to unspecified.

:[C++]:

    .. code-block:: c++
    
        void clear();

:[Python]:

    .. code-block:: python
    
        def clear(self)

:[JavaScript]:

    .. code-block:: javascript
    
        KeyLocator.prototype.clear = function()

:[Java]:

    .. code-block:: java
    
        public final void clear()
