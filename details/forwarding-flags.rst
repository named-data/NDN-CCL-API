.. _ForwardingFlags:

ForwardingFlags Class
=====================

A ForwardingFlags object holds the flags which specify how the forwarding daemon should forward an interest for a registered prefix.  We use a separate ForwardingFlags object to retain future compatibility if the daemon forwarding bits are changed, amended or deprecated.

:[C++]:
    | ``#include <ndn-cpp/forwarding-flags.hpp>``
    | Namespace: ``ndn``

ForwardingFlags Constructor

Create a new ForwardingFlags with "active" and "childInherit" set and all other flags cleared.

:[C++]:

    .. code-block:: c++

        ForwardingFlags();

:[JavaScript]:

    .. code-block:: javascript

        var ForwardingFlags = function ForwardingFlags()

ForwardingFlags.getActive Method
--------------------------------

Get the value of the "active" flag.

:[C++]:

    .. code-block:: c++

        bool getActive() const;

:[JavaScript]:

    .. code-block:: javascript

        ForwardingFlags.prototype.getActive = function()

:Returns:

    true if the flag is set, false if it is cleared.

ForwardingFlags.getChildInherit Method
--------------------------------------

Get the value of the "childInherit" flag.

:[C++]:

    .. code-block:: c++

        bool getChildInherit() const;

:[JavaScript]:

    .. code-block:: javascript

        ForwardingFlags.prototype.getChildInherit = function()

:Returns:

    true if the flag is set, false if it is cleared.

ForwardingFlags.getAdvertise Method
-----------------------------------

Get the value of the "advertise" flag.

:[C++]:

    .. code-block:: c++

        bool getAdvertise() const;

:[JavaScript]:

    .. code-block:: javascript

        ForwardingFlags.prototype.getAdvertise = function()

:Returns:

    true if the flag is set, false if it is cleared.

ForwardingFlags.getLast Method
------------------------------

Get the value of the "last" flag.

:[C++]:

    .. code-block:: c++

        bool getLast() const;

:[JavaScript]:

    .. code-block:: javascript

        ForwardingFlags.prototype.getLast = function()

:Returns:

    true if the flag is set, false if it is cleared.

ForwardingFlags.getCapture Method
---------------------------------

Get the value of the "capture" flag.

:[C++]:

    .. code-block:: c++

        bool getCapture() const;

:[JavaScript]:

    .. code-block:: javascript

        ForwardingFlags.prototype.getCapture = function()

:Returns:

    true if the flag is set, false if it is cleared.

ForwardingFlags.getLocal Method
-------------------------------

Get the value of the "local" flag.

:[C++]:

    .. code-block:: c++

        bool getLocal() const;

:[JavaScript]:

    .. code-block:: javascript

        ForwardingFlags.prototype.getLocal = function()

:Returns:

    true if the flag is set, false if it is cleared.

ForwardingFlags.getTap Method
-----------------------------

Get the value of the "tap" flag.

:[C++]:

    .. code-block:: c++

        bool getTap() const;

:[JavaScript]:

    .. code-block:: javascript

        ForwardingFlags.prototype.getTap = function()

:Returns:

    true if the flag is set, false if it is cleared.

ForwardingFlags.getCaptureOk Method
-----------------------------------

Get the value of the "captureOk" flag.

:[C++]:

    .. code-block:: c++

        bool getCaptureOk() const;

:[JavaScript]:

    .. code-block:: javascript

        ForwardingFlags.prototype.getCaptureOk = function()

:Returns:

    true if the flag is set, false if it is cleared.

ForwardingFlags.setActive Method
--------------------------------

Set the value of the "active" flag

:[C++]:

    .. code-block:: c++

        void setActive(

            bool active;

        );

:[JavaScript]:

    .. code-block:: javascript

        ForwardingFlags.prototype.setActive = function(
        
            active    // boolean
        
        )

:Parameters:

    - `active`
        true to set the flag, false to clear it.

ForwardingFlags.setChildInherit Method
--------------------------------------

Set the value of the "childInherit" flag

:[C++]:

    .. code-block:: c++

        void setChildInherit(

            bool childInherit;

        );

:[JavaScript]:

    .. code-block:: javascript

        ForwardingFlags.prototype.setChildInherit = function(
        
            childInherit    // boolean
        
        )

:Parameters:

    - `childInherit`
        true to set the flag, false to clear it.

ForwardingFlags.setAdvertise Method
-----------------------------------

Set the value of the "advertise" flag

:[C++]:

    .. code-block:: c++

        void setAdvertise(

            bool advertise;

        );

:[JavaScript]:

    .. code-block:: javascript

        ForwardingFlags.prototype.setAdvertise = function(
        
            advertise    // boolean
        
        )

:Parameters:

    - `advertise`
        true to set the flag, false to clear it.

ForwardingFlags.setLast Method
------------------------------

Set the value of the "last" flag

:[C++]:

    .. code-block:: c++

        void setLast(
        
            bool last;
        
        );

:[JavaScript]:

    .. code-block:: javascript

        ForwardingFlags.prototype.setLast = function(
        
            last    // boolean
        
        )

:Parameters:

    - `last`
        true to set the flag, false to clear it.

ForwardingFlags.setCapture Method
---------------------------------

Set the value of the "capture" flag

:[C++]:

    .. code-block:: c++

        void setCapture(
        
            bool capture;
        
        );

:[JavaScript]:

    .. code-block:: javascript

        ForwardingFlags.prototype.setCapture = function(
        
            capture    // boolean
        
        )

:Parameters:

    - `capture`
        true to set the flag, false to clear it.

ForwardingFlags.setLocal Method
-------------------------------

Set the value of the "local" flag

:[C++]:

    .. code-block:: c++

        void setLocal(
        
            bool local;
        
        );

:[JavaScript]:

    .. code-block:: javascript

        ForwardingFlags.prototype.setLocal = function(
        
            local    // boolean
        
        )

:Parameters:

    - `local`
        true to set the flag, false to clear it.

ForwardingFlags.setTap Method
-----------------------------

Set the value of the "tap" flag

:[C++]:

    .. code-block:: c++

        void setTap(
        
            bool tap;
        
        );

:[JavaScript]:

    .. code-block:: javascript

        ForwardingFlags.prototype.setTap = function(
        
            tap    // boolean
        
        )

:Parameters:

    - `tap`
        true to set the flag, false to clear it.

ForwardingFlags.setCaptureOk Method
-----------------------------------

Set the value of the "captureOk" flag

:[C++]:

    .. code-block:: c++

        void setCaptureOk(
        
            bool captureOk;
        
        );

:[JavaScript]:

    .. code-block:: javascript

        ForwardingFlags.prototype.setCaptureOk = function(
        
            captureOk    // boolean
        
        )

:Parameters:

    - `captureOk`
        true to set the flag, false to clear it.
