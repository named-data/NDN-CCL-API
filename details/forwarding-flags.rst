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

Create a new ForwardingFlags with "active" and "childInherit" set and all other flags cleared.

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

ForwardingFlags.getActive Method
--------------------------------

Get the value of the "active" flag.

:[C++]:

    .. code-block:: c++

        bool getActive() const;

:[Python]:

    .. code-block:: python
    
        # Returns bool
        def getActive(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns boolean
        ForwardingFlags.prototype.getActive = function()

:[Java]:

    .. code-block:: java
    
        public final boolean getActive()

:Returns:

    true if the flag is set, false if it is cleared.

ForwardingFlags.getAdvertise Method
-----------------------------------

Get the value of the "advertise" flag.

:[C++]:

    .. code-block:: c++

        bool getAdvertise() const;

:[Python]:

    .. code-block:: python
    
        # Returns bool
        def getAdvertise(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns boolean
        ForwardingFlags.prototype.getAdvertise = function()

:[Java]:

    .. code-block:: java
    
        public final boolean getAdvertise()

:Returns:

    true if the flag is set, false if it is cleared.

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

ForwardingFlags.getCaptureOk Method
-----------------------------------

Get the value of the "captureOk" flag.

:[C++]:

    .. code-block:: c++

        bool getCaptureOk() const;

:[Python]:

    .. code-block:: python
    
        # Returns bool
        def getCaptureOk(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns boolean
        ForwardingFlags.prototype.getCaptureOk = function()

:[Java]:

    .. code-block:: java
    
        public final boolean getCaptureOk()

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

ForwardingFlags.getLast Method
------------------------------

Get the value of the "last" flag.

:[C++]:

    .. code-block:: c++

        bool getLast() const;

:[Python]:

    .. code-block:: python
    
        # Returns bool
        def getLast(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns boolean
        ForwardingFlags.prototype.getLast = function()

:[Java]:

    .. code-block:: java
    
        public final boolean getLast()

:Returns:

    true if the flag is set, false if it is cleared.

ForwardingFlags.getLocal Method
-------------------------------

Get the value of the "local" flag.

:[C++]:

    .. code-block:: c++

        bool getLocal() const;

:[Python]:

    .. code-block:: python
    
        # Returns bool
        def getLocal(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns boolean
        ForwardingFlags.prototype.getLocal = function()

:[Java]:

    .. code-block:: java
    
        public final boolean getLocal()

:Returns:

    true if the flag is set, false if it is cleared.

ForwardingFlags.getTap Method
-----------------------------

Get the value of the "tap" flag.

:[C++]:

    .. code-block:: c++

        bool getTap() const;

:[Python]:

    .. code-block:: python
    
        # Returns bool
        def getTap(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns boolean
        ForwardingFlags.prototype.getTap = function()

:[Java]:

    .. code-block:: java
    
        public final boolean getTap()

:Returns:

    true if the flag is set, false if it is cleared.

ForwardingFlags.setActive Method
--------------------------------

Set the value of the "active" flag.

:[C++]:

    .. code-block:: c++

        void setActive(
            bool active;
        );

:[Python]:

    .. code-block:: python
    
        def setActive(self,
            active  # bool
        )

:[JavaScript]:

    .. code-block:: javascript

        ForwardingFlags.prototype.setActive = function(
            active  // boolean
        )

:[Java]:

    .. code-block:: java
    
        public final void setActive(
            boolean active;
        )

:Parameters:

    - `active`
        true to set the flag, false to clear it.

ForwardingFlags.setAdvertise Method
-----------------------------------

Set the value of the "advertise" flag.

:[C++]:

    .. code-block:: c++

        void setAdvertise(
            bool advertise;
        );

:[Python]:

    .. code-block:: python
    
        def setAdvertise(self,
            advertise  # bool
        )

:[JavaScript]:

    .. code-block:: javascript

        ForwardingFlags.prototype.setAdvertise = function(
            advertise  // boolean
        )

:[Java]:

    .. code-block:: java
    
        public final void setAdvertise(
            boolean advertise;
        )

:Parameters:

    - `advertise`
        true to set the flag, false to clear it.

ForwardingFlags.setCapture Method
---------------------------------

Set the value of the "capture" flag.

:[C++]:

    .. code-block:: c++

        void setCapture(
            bool capture;
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
            boolean capture;
        )

:Parameters:

    - `capture`
        true to set the flag, false to clear it.

ForwardingFlags.setCaptureOk Method
-----------------------------------

Set the value of the "captureOk" flag.

:[C++]:

    .. code-block:: c++

        void setCaptureOk(
            bool captureOk;
        );

:[Python]:

    .. code-block:: python
    
        def setCaptureOk(self,
            captureOk  # bool
        )

:[JavaScript]:

    .. code-block:: javascript

        ForwardingFlags.prototype.setCaptureOk = function(
            captureOk  // boolean
        )

:[Java]:

    .. code-block:: java
    
        public final void setCaptureOk(
            boolean captureOk;
        )

:Parameters:

    - `captureOk`
        true to set the flag, false to clear it.

ForwardingFlags.setChildInherit Method
--------------------------------------

Set the value of the "childInherit" flag.

:[C++]:

    .. code-block:: c++

        void setChildInherit(
            bool childInherit;
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
            boolean childInherit;
        )

:Parameters:

    - `childInherit`
        true to set the flag, false to clear it.

ForwardingFlags.setLast Method
------------------------------

Set the value of the "last" flag.

:[C++]:

    .. code-block:: c++

        void setLast(
            bool last;
        );

:[Python]:

    .. code-block:: python
    
        def setLast(self,
            last  # bool
        )

:[JavaScript]:

    .. code-block:: javascript

        ForwardingFlags.prototype.setLast = function(
            last  // boolean
        )

:[Java]:

    .. code-block:: java
    
        public final void setLast(
            boolean last;
        )

:Parameters:

    - `last`
        true to set the flag, false to clear it.

ForwardingFlags.setLocal Method
-------------------------------

Set the value of the "local" flag.

:[C++]:

    .. code-block:: c++

        void setLocal(
            bool local;
        );

:[Python]:

    .. code-block:: python
    
        def setLocal(self,
            local  # bool
        )

:[JavaScript]:

    .. code-block:: javascript

        ForwardingFlags.prototype.setLocal = function(
            local  // boolean
        )

:[Java]:

    .. code-block:: java
    
        public final void setLocal(
            boolean local;
        )

:Parameters:

    - `local`
        true to set the flag, false to clear it.

ForwardingFlags.setTap Method
-----------------------------

Set the value of the "tap" flag.

:[C++]:

    .. code-block:: c++

        void setTap(
            bool tap;
        );

:[Python]:

    .. code-block:: python
    
        def setTap(self,
            tap  # bool
        )

:[JavaScript]:

    .. code-block:: javascript

        ForwardingFlags.prototype.setTap = function(
            tap  // boolean
        )

:[Java]:

    .. code-block:: java
    
        public final void setTap(
            boolean tap;
        )

:Parameters:

    - `tap`
        true to set the flag, false to clear it.
