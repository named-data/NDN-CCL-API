ChronoSync2013 Class
====================

.. container:: experimental

    .. admonition:: Experimental

       The support for ChronoSync is experimental and the API is not finalized.

    A ChronoSync2013 implements the NDN ChronoSync protocol as described in the
    2013 paper "Let’s ChronoSync: Decentralized Dataset State Synchronization in
    Named Data Networking".
    http://named-data.net/publications/chronosync

    :[C++]:
        | ``#include <ndn-cpp/sync/chrono-sync2013.hpp>``
        | Namespace: ``ndn``

ChronoSync2013 Constructor
--------------------------

.. container:: experimental

    .. admonition:: Experimental

       The support for ChronoSync is experimental and the API is not finalized.

    Create a new ChronoSync2013 to communicate using the given face. Initialize
    the digest log with a digest of "00" and and empty content. Register the
    applicationBroadcastPrefix to receive interests for sync state messages and
    express an interest for the initial root digest "00".

    :[C++]:

        .. code-block:: c++

            ChronoSync2013(
                OnReceivedSyncState onReceivedSyncState,
                OnInitialized onInitialized,
                const Name& applicationDataPrefix,
                const Name& applicationBroadcastPrefix,
                int sessionNo,
                Transport& transport,
                Face& face,
                KeyChain& keyChain,
                const Name& certificateName,
                Milliseconds syncLifetime,
                const OnRegisterFailed& onRegisterFailed
            );

    :Parameters:

        - `onReceivedSyncState`
            When ChronoSync receives a sync state message this calls
            onReceivedSyncState(syncStates, isRecovery) where:

            - `syncStates`
                is the list of :ref:`SyncState <ChronoSync2013.SyncState>` messages.
            - `isRecovery`
                is true if this is the initial list of SyncState messages or from
                a recovery interest. (For example, if isRecovery is true, a chat
                application would not want to re-display all the associated chat
                messages.) The callback should send interests to fetch the
                application data for the sequence numbers in the sync state.

        - `onInitialized`
            This calls onInitialized() when the first sync data is received (or
            the interest times out because there are no other publishers yet).

        - `applicationDataPrefix`
            The prefix used by this application instance for application data.
            For example, "/my/local/prefix/ndnchat4/0K4wChff2v". This is used
            when sending a sync message for a new sequence number. In the sync
            message, this uses applicationDataPrefix.toUri().

        - `applicationBroadcastPrefix`
            The broadcast name prefix including the application name. For
            example, "/ndn/broadcast/ChronoChat-0.3/ndnchat1". This makes a copy
            of the name.

        - `sessionNo`
            The session number used with the applicationDataPrefix in sync state
            messages.

        - `transport`


        - `face`
            The :ref:`Face <Face>` for calling registerPrefix and expressInterest.
            The Face object must remain valid for the life of this
            ChronoSync2013 object.

        - `keyChain`
            To sign a data packet containing a sync state message, this calls
            keyChain.sign(data, certificateName).

        - `certificateName`
            The certificate name of the key to use for signing a data packet
            containing a sync state message.

        - `syncLifetime`
            The interest lifetime in milliseconds for sending sync interests.

        - `onRegisterFailed`
            If failed to register the prefix to receive interests for the
            `applicationBroadcastPrefix`, this calls
            onRegisterFailed(applicationBroadcastPrefix).

.. _getProducerSequenceNo:

ChronoSync2013.getProducerSequenceNo Method
-------------------------------------------

.. container:: experimental

    .. admonition:: Experimental

       The support for ChronoSync is experimental and the API is not finalized.

    Get the current sequence number in the digest tree for the given producer
    dataPrefix and sessionNo.

    :[C++]:

        .. code-block:: c++

            int getProducerSequenceNo(
                const std::string& dataPrefix,
                int sessionNo
            );

    :Parameters:

        - `dataPrefix`
            The producer data prefix as a Name URI string.

        - `sessionNo`
            The producer session number.

    :Returns:

        The current producer sequence number, or -1 if the producer namePrefix
        and sessionNo are not in the digest tree.

.. _getSequenceNo:

ChronoSync2013.getSequenceNo Method
-----------------------------------

.. container:: experimental

    .. admonition:: Experimental

       The support for ChronoSync is experimental and the API is not finalized.

    Get the sequence number of the latest data published by this application
    instance.

    :[C++]:

        .. code-block:: c++

            int getSequenceNo();

    :Returns:

        The sequence number.

.. _publishNextSequenceNo:

ChronoSync2013.publishNextSequenceNo Method
-------------------------------------------

.. container:: experimental

    .. admonition:: Experimental

       The support for ChronoSync is experimental and the API is not finalized.

    Increment the sequence number, create a sync message with the new sequence
    number and publish a data packet where the name is the
    applicationBroadcastPrefix + the root digest of the current digest tree.
    Then add the sync message to the digest tree and digest log which creates a
    new root digest. Finally, express an interest for the next sync update with
    the name applicationBroadcastPrefix + the new root digest. After this, your
    application should publish the content for the new sequence number. You can
    get the new sequence number with :ref:`getSequenceNo() <getSequenceNo>`.

    .. note::

        [except JavaScript] Your application must call :ref:`processEvents <processEvents>`.  
        Since processEvents modifies the internal ChronoSync data structures, your
        application should make sure that it calls processEvents in the same
        thread as publishNextSequenceNo (which also modifies the data structures).

    :[C++]:

        .. code-block:: c++

            void publishNextSequenceNo();

.. _ChronoSync2013.SyncState:

ChronoSync2013.SyncState Class
==============================

.. container:: experimental

    .. admonition:: Experimental

       The support for ChronoSync is experimental and the API is not finalized.

    A SyncState holds the values of a sync state message which is passed to the
    onReceivedSyncState callback which was given to the ChronoSyn2013 constructor.

    :[C++]:
        | ``#include <ndn-cpp/sync/chrono-sync2013.hpp>``
        | Namespace: ``ndn``

ChronoSync2013.SyncState.getDataPrefix Method
---------------------------------------------

.. container:: experimental

    .. admonition:: Experimental

       The support for ChronoSync is experimental and the API is not finalized.

    Get the application data prefix for this sync state message.

    :[C++]:

        .. code-block:: c++

            const std::string& getDataPrefix() const;

    :Returns:

        The application data prefix as a Name URI string.

ChronoSync2013.SyncState.getSequenceNo Method
---------------------------------------------

.. container:: experimental

    .. admonition:: Experimental

       The support for ChronoSync is experimental and the API is not finalized.

    Get the sequence number for this sync state message.

    :[C++]:

        .. code-block:: c++

            const std::string& getSequenceNo() const;

    :Returns:

        The sequence number.

ChronoSync2013.SyncState.getSessionNo Method
--------------------------------------------

.. container:: experimental

    .. admonition:: Experimental

       The support for ChronoSync is experimental and the API is not finalized.

    Get the session number associated with the application data prefix for this
    sync state message.

    :[C++]:

        .. code-block:: c++

            const std::string& getSessionNo() const;

    :Returns:

        The session number.
