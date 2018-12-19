.. _Validator:

Validator Class
===============

A Validator provides an interface for validating data and interest packets.
A Validator has a trust anchor cache to save static and dynamic trust
anchors, a verified certificate cache for saving certificates that are
already verified, and an unverified certificate cache for saving pre-fetched
but not yet verified certificates. You should create and object of one of the
subclasses, then use the Validator.validate methods.

:[C++]:
    | ``#include <ndn-cpp/security/v2/validator.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn.security.v2``

:[Java]:
    Package: ``net.named_data.jndn.security.v2``

:Realizations:

    - :ref:`ValidatorConfig Class <ValidatorConfig>`
    - :ref:`ValidatorNull Class <ValidatorNull>`

Validator.getFetcher Method
---------------------------

Get the :ref:`CertificateFetcher <CertificateFetcher>` given to (or created in)
the constructor.

:[C++]:

    .. code-block:: c++

        CertificateFetcher& getFetcher();

:[Python]:

    .. code-block:: python

        # Returns CertificateFetcher
        def getFetcher(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns CertificateFetcher
        Validator.prototype.getFetcher = function()

:[Java]:

    .. code-block:: java

        public final CertificateFetcher getFetcher()

:Returns:

    The :ref:`CertificateFetcher <CertificateFetcher>`.

Validator.getMaxDepth Method
----------------------------

Get the maximum depth of the certificate chain.

:[C++]:

    .. code-block:: c++

        size_t getMaxDepth();

:[Python]:

    .. code-block:: python

        # Returns int
        def getMaxDepth(self)

:[JavaScript]:

    .. code-block:: javascript

        // Returns number
        Validator.prototype.getMaxDepth = function()

:[Java]:

    .. code-block:: java

        public final int getMaxDepth()

:Returns:

    The maximum depth.

Validator.setMaxDepth Method
----------------------------

Set the maximum depth of the certificate chain.

:[C++]:

    .. code-block:: c++

        void setMaxDepth(
            size_t maxDepth
        );

:[Python]:

    .. code-block:: python

        def setMaxDepth(self,
            maxDepth  # int
        )

:[JavaScript]:

    .. code-block:: javascript

        Validator.prototype.setMaxDepth = function(
            maxDepth  // number
        )

:[Java]:

    .. code-block:: java

        public final void setMaxDepth(
            int maxDepth
        )

:Parameters:

    - `maxDepth`
        The maximum depth.

Validator.validate Methods
--------------------------

Validator.validate Method (for Data)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Asynchronously validate the Data packet.

:[C++]:

    .. code-block:: c++

        void validate(
            const Data& data,
            const DataValidationSuccessCallback& successCallback,
            const DataValidationFailureCallback& failureCallback
        );

:[Python]:

    .. code-block:: python

        def validate(self,
            data,             # Data
            successCallback,  # function object
            failureCallback   # function object
        )

:[JavaScript]:

    .. code-block:: javascript

        Validator.prototype.validate = function(
            data,             // Data
            successCallback,  // function
            failureCallback   // function
        )

:[Java]:

    .. code-block:: java

        public final void validate(
            Data data,
            DataValidationSuccessCallback successCallback,
            DataValidationFailureCallback failureCallback
        )

:Parameters:

    - `data`
	The Data packet to validate, which is copied.

    - `successCallback`
	On validation success, this calls ``successCallback(data)`` where:

	    - ``data`` is a copy of the Data object provided.

        .. note::

            The library will log any exceptions thrown by this callback, but for better
            error handling the callback should catch and properly handle any exceptions.

    - `failureCallback`
	On validation failure, this calls ``failureCallback(data, error)`` where:

	    - ``data`` is a copy of the Data object provided.
	    - ``error`` is a :ref:`ValidationError <ValidationError>`.

        .. note::

            The library will log any exceptions thrown by this callback, but for better
            error handling the callback should catch and properly handle any exceptions.

Validator.validate Method (for Interest)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Asynchronously validate the Interest packet.

:[C++]:

    .. code-block:: c++

        void validate(
            const Interest& interest,
            const InterestValidationSuccessCallback& successCallback,
            const InterestValidationFailureCallback& failureCallback
        );

:[Python]:

    .. code-block:: python

        def validate(self,
            interest,         # Interest
            successCallback,  # function object
            failureCallback   # function object
        )

:[JavaScript]:

    .. code-block:: javascript

        Validator.prototype.validate = function(
            interest,         // Interest
            successCallback,  // function
            failureCallback   // function
        )

:[Java]:

    .. code-block:: java

        public final void validate(
            Interest interest,
            InterestValidationSuccessCallback successCallback,
            InterestValidationFailureCallback failureCallback
        )

:Parameters:

    - `interest`
	The Interest packet to validate, which is copied.

    - `successCallback`
	On validation success, this calls ``successCallback(interest)`` where:

	    - ``interest`` is a copy of the Interest object provided.

        .. note::

            The library will log any exceptions thrown by this callback, but for better
            error handling the callback should catch and properly handle any exceptions.

    - `failureCallback`
	On validation failure, this calls ``failureCallback(interest, error)`` where:

	    - ``interest`` is a copy of the Interest object provided.
	    - ``error`` is a :ref:`ValidationError <ValidationError>`.

        .. note::

            The library will log any exceptions thrown by this callback, but for better
            error handling the callback should catch and properly handle any exceptions.

.. _ValidatorConfig:

ValidatorConfig Class
=====================

ValidatorConfig extends Validator to implements a validator which can be set up
via a configuration file.

:[C++]:
    | ``#include <ndn-cpp/security/validator-config.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn.security``

:[Java]:
    Package: ``net.named_data.jndn.security``

ValidatorConfig Constructors
----------------------------

ValidatorConfig Constructor (from CertificateFetcher)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a ValidatorConfig to use the given certificate fetcher.

:[C++]:

    .. code-block:: c++

        ValidatorConfig(
            const ptr_lib::shared_ptr<CertificateFetcher>& fetcher
        );

:[Python]:

    .. code-block:: python

        def __init__(self,
            fetcher  # CertificateFetcher
        )

:[JavaScript]:

    .. code-block:: javascript

        var ValidatorConfig = function ValidatorConfig(
            fetcher  // CertificateFetcher
        )

:[Java]:

    .. code-block:: java

        public ValidatorConfig(
            CertificateFetcher fetcher
        )

:Parameters:

    - `fetcher`
        The :ref:`CertificateFetcher <CertificateFetcher>` to use.

ValidatorConfig Constructor (from Face)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create a ValidatorConfig that uses a CertificateFetcherFromNetwork for the given
Face.

:[C++]:

    .. code-block:: c++

        ValidatorConfig(
            Face& face
        );

:[Python]:

    .. code-block:: python

        def __init__(self,
            face  # Face
        )

:[JavaScript]:

    .. code-block:: javascript

        var ValidatorConfig = function ValidatorConfig(
            face  // Face
        )

:[Java]:

    .. code-block:: java

        public ValidatorConfig(
            Face face
        )

:Parameters:

    - `face`
        The :ref:`Face <Face>` for the certificate fetcher to call expressInterest.

ValidatorConfig.load Methods
----------------------------

ValidatorConfig.load Method (from file path)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Load the configuration from the given config file. This replaces any existing
configuration.

:[C++]:

    .. code-block:: c++

        void load(
            const std::string& filePath
        );

:[Python]:

    .. code-block:: python

        def load(self,
            filePath  # str
        )

:[JavaScript]:

    .. code-block:: javascript

        ValidatorConfig.prototype.load = function(
            filePath  // string
        )

:[Java]:

    .. code-block:: java

        public final void load(
            String filePath
        )

:Parameters:

    - `filePath`
        The The path of the config file.

ValidatorConfig.load Method (from input string)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Load the configuration from the given input string. This replaces any existing
configuration.

:[C++]:

    .. code-block:: c++

        void load(
            const std::string& input,
            const std::string& inputName
        );

:[Python]:

    .. code-block:: python

        def load(self,
            input,     # str
            inputName  # str
        )

:[JavaScript]:

    .. code-block:: javascript

        ValidatorConfig.prototype.load = function(
            input,     // string
            inputName  // string
        )

:[Java]:

    .. code-block:: java

        public final void load(
            String input,
            String inputName
        )

:Parameters:

    - `input`
        The contents of the configuration rules, with lines separated by
        "\\n" or "\\r\\n".

    - `inputName`
        Used for log messages, etc.

.. _ValidatorNull:

ValidatorNull Class
===================

ValidatorNull extends Validator with an "accept-all" policy and an offline
certificate fetcher.

:[C++]:
    | ``#include <ndn-cpp/security/validator-null.hpp>``
    | Namespace: ``ndn``

:[Python]:
    Module: ``pyndn.security``

:[Java]:
    Package: ``net.named_data.jndn.security``

ValidatorNull Constructor
-------------------------

Create a ValidatorNull object.

:[C++]:

    .. code-block:: c++

        ValidatorNull();

:[Python]:

    .. code-block:: python

        def __init__(self)

:[JavaScript]:

    .. code-block:: javascript

        var ValidatorNull = function ValidatorNull()

:[Java]:

    .. code-block:: java

        public ValidatorNull()
