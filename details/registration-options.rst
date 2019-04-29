.. _RegistrationOptions:

RegistrationOptions Class
=========================

A RegistrationOptions holds the options used when registering with the
forwarder to specify how to forward an interest and other options. We use a
separate RegistrationOptions object to retain future compatibility if the
format of the registration command is changed.
(This class was renamed from ForwardingFlags, which is deprecated.)

:[C++]:
    | ``#include <ndn-cpp/registration-options.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn``

:[Java]:
    Package: ``net.named_data.jndn``

RegistrationOptions Constructor
-------------------------------

Create a new RegistrationOptions with "childInherit" set and all other flags cleared.

:[C++]:

    .. code-block:: c++

        RegistrationOptions();

:[Python]:

    .. code-block:: python
    
        def __init__(self)

:[JavaScript]:

    .. code-block:: javascript

        var RegistrationOptions = function RegistrationOptions()

:[Java]:

    .. code-block:: java
    
        public RegistrationOptions()

RegistrationOptions.getCapture Method
-------------------------------------

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
        RegistrationOptions.prototype.getCapture = function()

:[Java]:

    .. code-block:: java
    
        public final boolean getCapture()

:Returns:

    true if the flag is set, false if it is cleared.

RegistrationOptions.getChildInherit Method
------------------------------------------

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
        RegistrationOptions.prototype.getChildInherit = function()

:[Java]:

    .. code-block:: java
    
        public final boolean getChildInherit()

:Returns:

    true if the flag is set, false if it is cleared.

RegistrationOptions.getOrigin Method
------------------------------------

Get the origin value.

:[C++]:

    .. code-block:: c++

        int getOrigin() const;

:[Python]:

    .. code-block:: python

        # Returns int
        def getOrigin(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        RegistrationOptions.prototype.getOrigin = function()

:[Java]:

    .. code-block:: java

        public final int getOrigin()

:Returns:

    The origin value. If not specified, return ``-1`` (C++ and Java)
    or ``None`` (Python) or ``null`` (JavaScript).

RegistrationOptions.setCapture Method
-------------------------------------

Set the value of the "capture" flag.

:[C++]:

    .. code-block:: c++

        RegistrationOptions& setCapture(
            bool capture
        );

:[Python]:

    .. code-block:: python

        # Returns RegistrationOptions
        def setCapture(self,
            capture  # bool
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns RegistrationOptions
        RegistrationOptions.prototype.setCapture = function(
            capture  // boolean
        )

:[Java]:

    .. code-block:: java
    
        public final RegistrationOptions setCapture(
            boolean capture
        )

:Parameters:

    - `capture`
        true to set the "capture" flag, false to clear it.

:Returns:

    This RegistrationOptions so that you can chain calls to update values.

RegistrationOptions.setChildInherit Method
------------------------------------------

Set the value of the "childInherit" flag.

:[C++]:

    .. code-block:: c++

        RegistrationOptions& setChildInherit(
            bool childInherit
        );

:[Python]:

    .. code-block:: python
    
        # Returns RegistrationOptions
        def setChildInherit(self,
            childInherit  # bool
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns RegistrationOptions
        RegistrationOptions.prototype.setChildInherit = function(
            childInherit  // boolean
        )

:[Java]:

    .. code-block:: java
    
        public final RegistrationOptions setChildInherit(
            boolean childInherit
        )

:Parameters:

    - `childInherit`
        true to set the "childInherit" flag, false to clear it.

:Returns:

    This RegistrationOptions so that you can chain calls to update values.

RegistrationOptions.setOrigin Method
------------------------------------

Set the origin value.

:[C++]:

    .. code-block:: c++

        RegistrationOptions& setOrigin(
            int origin
        );

:[Python]:

    .. code-block:: python

        # Returns RegistrationOptions
        def setOrigin(self,
            origin  # int
        )

:[JavaScript]:

    .. code-block:: javascript

        // Returns RegistrationOptions
        RegistrationOptions.prototype.setOrigin = function(
            origin  // number
        )

:[Java]:

    .. code-block:: java

        public final RegistrationOptions setOrigin(
            int origin
        )

:Parameters:

    - `origin`
        The origin value. If not specified, set to ``-1`` (C++ and Java)
        or ``None`` (Python) or ``null`` (JavaScript).

:Returns:

    This RegistrationOptions so that you can chain calls to update values.
