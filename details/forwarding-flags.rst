.. _ForwardingFlags:

ForwardingFlags Class
=====================

A ForwardingFlags object holds the flags which specify how the forwarding daemon should forward an interest for a registered prefix.  We use a separate ForwardingFlags object to retain future compatibility if the daemon forwarding bits are changed, amended or deprecated.

:[C++]:
    | ``#include <ndn-cpp/forwarding-flags.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn``

:[Java]:
    Package: ``net.named_data.jndn``

ForwardingFlags Constructor

Create a new ForwardingFlags with "childInherit" set and all other flags cleared.

:[C++]:

    .. code-block:: c++

        ForwardingFlags();

:[Python]:

    .. code-block:: python
    
        def __init__(self)

:[JavaScript]:

    .. code-block:: javascript

        var ForwardingFlags = function ForwardingFlags()

:[Java]:

    .. code-block:: java
    
        public ForwardingFlags()

ForwardingFlags.getCapture Method
---------------------------------

Get the value of the "capture" flag.

:[C++]:

    .. code-block:: c++

        bool getCapture() const;

:[Python]:

    .. code-block:: python
    
        # Returns bool
        def getCapture(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns boolean
        ForwardingFlags.prototype.getCapture = function()

:[Java]:

    .. code-block:: java
    
        public final boolean getCapture()

:Returns:

    true if the flag is set, false if it is cleared.

ForwardingFlags.getChildInherit Method
--------------------------------------

Get the value of the "childInherit" flag.

:[C++]:

    .. code-block:: c++

        bool getChildInherit() const;

:[Python]:

    .. code-block:: python
    
        # Returns bool
        def getChildInherit(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns boolean
        ForwardingFlags.prototype.getChildInherit = function()

:[Java]:

    .. code-block:: java
    
        public final boolean getChildInherit()

:Returns:

    true if the flag is set, false if it is cleared.

ForwardingFlags.setCapture Method
---------------------------------

Set the value of the "capture" flag.

:[C++]:

    .. code-block:: c++

        void setCapture(
            bool capture
        );

:[Python]:

    .. code-block:: python
    
        def setCapture(self,
            capture  # bool
        )

:[JavaScript]:

    .. code-block:: javascript

        ForwardingFlags.prototype.setCapture = function(
            capture  // boolean
        )

:[Java]:

    .. code-block:: java
    
        public final void setCapture(
            boolean capture
        )

:Parameters:

    - `capture`
        true to set the flag, false to clear it.

ForwardingFlags.setChildInherit Method
--------------------------------------

Set the value of the "childInherit" flag.

:[C++]:

    .. code-block:: c++

        void setChildInherit(
            bool childInherit
        );

:[Python]:

    .. code-block:: python
    
        def setChildInherit(self,
            childInherit  # bool
        )

:[JavaScript]:

    .. code-block:: javascript

        ForwardingFlags.prototype.setChildInherit = function(
            childInherit  // boolean
        )

:[Java]:

    .. code-block:: java
    
        public final void setChildInherit(
            boolean childInherit
        )

:Parameters:

    - `childInherit`
        true to set the flag, false to clear it.
