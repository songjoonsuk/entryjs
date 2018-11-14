'use strict';

const Entry = require('../entry');

Entry.STATIC = {
    /* data type */
    OBJECT: 0,
    ENTITY: 1,
    SPRITE: 2,
    SOUND: 3,
    VARIABLE: 4,
    FUNCTION: 5,
    SCENE: 6,
    MESSAGE: 7,
    BLOCK_MODEL: 8,
    BLOCK_RENDER_MODEL: 9,
    BOX_MODEL: 10,
    THREAD_MODEL: 11,
    DRAG_INSTANCE: 12,

    /* block state */
    BLOCK_STATIC: 0,
    BLOCK_MOVE: 1,
    BLOCK_FOLLOW: 2,

    /* execute return state */
    RETURN: 0,
    CONTINUE: 1,
    BREAK: 2,
    PASS: 3,

    //if command type number > 500
    //undo redo not working for usual workspace
    //but recorded and validated in guide

    COMMAND_TYPES_ALWAYS: {
        sceneAdd: 1,
        sceneRemove: 2,
        sceneRename: 3,
        sceneSort: 4,

        addThread: 101,
        destroyThread: 102,
        destroyBlock: 103,
        recoverBlock: 104,
        insertBlock: 105,
        separateBlock: 106,
        moveBlock: 107,
        cloneBlock: 108,
        uncloneBlock: 109,
        scrollBoard: 110,
        setFieldValue: 111,
        selectBlockMenu: 112,
        destroyBlockBelow: 113,
        destroyThreads: 114,
        addThreads: 115,
        recoverBlockBelow: 116,
        addThreadFromBlockMenu: 117,
        insertBlockFromBlockMenu: 118,
        moveBlockFromBlockMenu: 119,
        separateBlockForDestroy: 120,
        moveBlockForDestroy: 121,
        insertBlockFromBlockMenuFollowSeparate: 122,
        insertBlockFollowSeparate: 123,
        separateBlockByCommand: 124,

        selectObject: 201,
        objectEditButtonClick: 202,
        objectAddPicture: 203,
        objectRemovePicture: 204,
        objectAddSound: 205,
        objectRemoveSound: 206,
        objectNameEdit: 207,
        addObject: 208,
        removeObject: 209,
        objectUpdatePosX: 211,
        objectUpdatePosY: 212,
        objectUpdateSize: 213,
        objectUpdateRotationValue: 214,
        objectUpdateDirectionValue: 215,
        objectUpdateRotateMethod: 216,
        entitySetModel: 217,
        objectAddExpansionBlock: 218,
        objectRemoveExpansionBlock: 219,

        do: 301,
        undo: 302,
        redo: 303,

        editPicture: 401,
        uneditPicture: 402,
        processPicture: 403,
        unprocessPicture: 404,
        editText: 405,

        variableContainerAddMessage: 807,
        variableContainerRemoveMessage: 808,

        funcCreate: 1004,
        funcUpdate: 1005,


        createCommentBlock: 1201,
        removeCommentBlock: 1202,
        showAllCommentBlock: 1203,
        hideAllCommentBlock: 1204,
        //TODO commands development
    },

    COMMAND_TYPES_NOT_ALWAYS: {
        sceneSelect: 5,

        addObjectButtonClick: 210,

        toggleRun: 501,
        toggleStop: 502,

        containerSelectObject: 601,

        playgroundChangeViewMode: 701,
        playgroundClickAddPicture: 702,
        playgroundClickAddSound: 703,
        playgroundClickAddPictureCancel: 704,
        playgroundClickAddSoundCancel: 705,

        variableContainerSelectFilter: 801,
        variableContainerClickVariableAddButton: 802,
        variableContainerAddVariable: 803,
        variableContainerRemoveVariable: 804,
        variableAddSetName: 805,
        messageSetName: 806,
        variableAddSetScope: 809,
        variableAddSetCloud: 810,
        variableSetVisibility: 811,
        variableSetDefaultValue: 812,
        variableSetSlidable: 813,
        variableSetMinValue: 814,
        variableSetMaxValue: 815,
        variableContainerClickListAddButton: 816,
        variableContainerAddList: 817,
        variableContainerRemoveList: 818,
        listAddSetName: 819,
        listAddSetScope: 820,
        listAddSetCloud: 821,
        listSetVisibility: 822,
        listChangeLength: 823,
        listSetDefaultValue: 824,
        setMessageEditable: 825,
        setVariableEditable: 826,
        setListEditable: 827,
        variableSetName: 828,
        listSetName: 829,


        dismissModal: 900,

        funcCreateStart: 1001,
        funcEditStart: 1002,
        funcEditCancel: 1003,

        playgroundClickAddExpansionBlock: 1101,
        playgroundClickAddExpansionBlockCancel: 1102,
    },

    RECORDABLE: {
        SUPPORT: 1,
        SKIP: 2,
        ABANDON: 3,
    },

    get COMMAND_TYPES() {
        return Object.assign(
            {},
            Entry.STATIC.COMMAND_TYPES_ALWAYS,
            Entry.STATIC.COMMAND_TYPES_NOT_ALWAYS
        );
    },

    getCommandName(commandType) {
        return _.findKey(
            Entry.STATIC.COMMAND_TYPES,
            _.partial(_.isEqual, commandType)
        );
    },
};
