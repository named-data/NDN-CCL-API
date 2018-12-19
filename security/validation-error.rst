.. _ValidationError:

ValidationError Class
=====================

A ValidationError holds an error code and an optional detailed error message.

:[C++]:
    | ``#include <ndn-cpp/security/v2/validation-error.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn.security.v2``

:[Java]:
    Package: ``net.named_data.jndn.security.v2``

.. _ValidationError.getCode:

ValidationError.getCode Method
------------------------------

Get the error code.

:[C++]:

    .. code-block:: c++

        int getCode() const;

:[Python]:

    .. code-block:: python

        # Returns int
        def getCode(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        ValidationError.prototype.getCode = function()

:[Java]:

    .. code-block:: java

        public final int getCode()

:Returns:

    The error code which is one of the standard error codes such as
    INVALID_SIGNATURE, or a custom code if greater than or equal to USER_MIN.
    The codes are:

        * C++: ``ValidationError::INVALID_SIGNATURE``,  ``ValidationError::NO_SIGNATURE``,  ``ValidationError::CANNOT_RETRIEVE_CERTIFICATE``,  ``ValidationError::EXPIRED_CERTIFICATE``,  ``ValidationError::LOOP_DETECTED``,  ``ValidationError::MALFORMED_CERTIFICATE``,  ``ValidationError::EXCEEDED_DEPTH_LIMIT``,  ``ValidationError::INVALID_KEY_LOCATOR``,  ``ValidationError::POLICY_ERROR``,  ``ValidationError::IMPLEMENTATION_ERROR``,  ``ValidationError::USER_MIN``
        * Python, JavaScript, Java: ``ValidationError.INVALID_SIGNATURE``,  ``ValidationError.NO_SIGNATURE``,  ``ValidationError.CANNOT_RETRIEVE_CERTIFICATE``,  ``ValidationError.EXPIRED_CERTIFICATE``,  ``ValidationError.LOOP_DETECTED``,  ``ValidationError.MALFORMED_CERTIFICATE``,  ``ValidationError.EXCEEDED_DEPTH_LIMIT``,  ``ValidationError.INVALID_KEY_LOCATOR``,  ``ValidationError.POLICY_ERROR``,  ``ValidationError.IMPLEMENTATION_ERROR``,  ``ValidationError.USER_MIN``

ValidationError.getInfo Method
------------------------------

Get the error message.

:[C++]:

    .. code-block:: c++

        const std::string& getInfo() const;

:[Python]:

    .. code-block:: python

        # Returns str
        def getInfo(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns string
        ValidationError.prototype.getInfo = function()

:[Java]:

    .. code-block:: java

        public final String getInfo()

:Returns:

    The error message, or "" if none.

ValidationError.toString Method
-------------------------------

Get a string representation of this ValidationError.

:[C++]:

    .. code-block:: c++

        std::string toString() const;

:[Python]:

    .. code-block:: python

        # Returns str
        def toString(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns string
        ValidationError.prototype.toString = function()

:[Java]:

    .. code-block:: java

        public String toString()

:Returns:

    The string representation.
