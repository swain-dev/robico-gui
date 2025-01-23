/* eslint-disable max-len */
import ScratchBlocks from 'scratch-blocks';
import {defaultColors} from './themes';

const categorySeparator = '<sep gap="36"/>';

const blockSeparator = '<sep gap="36"/>'; // At default scale, about 28px

const xmlEscape = function (unsafe) {
    return unsafe.replace(/[<>&'"]/g, c => {
        switch (c) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '&': return '&amp;';
        case '\'': return '&apos;';
        case '"': return '&quot;';
        }
    });
};

/* eslint-disable no-unused-vars */
const motion = function (isInitialSetup, isStage, targetId, colors) {
    const stageSelected = ScratchBlocks.ScratchMsgs.translate(
        'MOTION_STAGE_SELECTED',
        'Stage selected: no motion blocks'
    );
    // Note: the category's secondaryColour matches up with the blocks' tertiary color, both used for border color.
    return `
    <category name="%{BKY_CATEGORY_MOTION}" id="motion" colour="${colors.primary}" secondaryColour="${colors.tertiary}">
        ${isStage ? `
        <label text="${stageSelected}"></label>
        ` : `
        <block type="motion_moveway" id="motion_moveway">
            <value name="way">
                <shadow type="motion_way_menu">
                </shadow>
            </value>
            <value name="distance">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="speed">
                <shadow type="motion_speed_menu">
                </shadow>
            </value>
        </block>
        <block type="motion_movesteps_with_speed" id="motion_movesteps_with_speed">
            <value name="distance">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="speed">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
        </block>
        <block type="motion_moveleft_with_speed" id="motion_moveleft_with_speed">
            <value name="way">
                <shadow type="motion_way_menu">
                </shadow>
            </value>
            <value name="speed">
                <shadow type="motion_speed_menu">
                </shadow>
            </value>
        </block>
        <block type="motion_moveright_with_speed" id="motion_moveright_with_speed">
            <value name="way">
                <shadow type="motion_way_menu">
                </shadow>
            </value>
            <value name="speed">
                <shadow type="motion_speed_menu">
                </shadow>
            </value>
        </block>
        <block type="motion_turnleft_turnright" id="motion_turnleft_turnright">
            <value name="direction">
                <shadow type="motion_direction_menu">
                </shadow>
            </value>
            <value name="rotation">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
        </block>
        <block type="motion_turn_option" id="motion_turn_option">
            <value name="direction">
                <shadow type="motion_direction_menu">
                </shadow>
            </value>
            <value name="rotation">
                <shadow type="motion_rotation_menu">
                </shadow>
            </value>
        </block>
        <block type="motion_stop_wheels" id="motion_stop_wheels">
        </block>`}
        ${categorySeparator}
    </category>
    `;
};

// line tracing

const lineTracing = function (isInitialSetup, isStage, targetId, colors) {
    // Note: the category's secondaryColour matches up with the blocks' tertiary color, both used for border color.
    return `
    <category name="%{BKY_CATEGORY_LINE_TRACING}" id="motion" colour="${colors.primary}" secondaryColour="${colors.tertiary}">
        <block type="line_tracing_mode" id="line_tracing_mode">
            <value name="mode">
                <shadow type="line_tracing_mode_menu">
                </shadow>
            </value>
        </block>
        <block type="line_tracing_mode_ghost" id="line_tracing_mode_ghost">
            <value name="mode">
                <shadow type="line_tracing_mode_menu">
                </shadow>
            </value>
        </block>
        <block type="line_tracing_mode_direction" id="line_tracing_mode_direction">
            <value name="mode">
                <shadow type="line_tracing_mode_menu">
                </shadow>
            </value>
            <value name="direction">
                <shadow type="line_tracing_direction_menu">
                </shadow>
            </value>
        </block>
        <block type="line_tracing_pick_direction" id="line_tracing_pick_direction">
            <value name="direction">
                <shadow type="line_tracing_direction_menu_2">
                </shadow>
            </value>
        </block>
         <block type="line_tracing_speed" id="line_tracing_speed">
            <value name="speed">
                <shadow type="line_tracing_speed_menu">
                </shadow>
            </value>
        </block>
    </category>
    `;
};


// light
const light = function (isInitialSetup, isStage, targetId, colors) {
    // Note: the category's secondaryColour matches up with the blocks' tertiary color, both used for border color.
    return `
    <category name="%{BKY_CATEGORY_LIGHT}" id="light" colour="${colors.primary}" secondaryColour="${colors.tertiary}">
        <block type="light_turnon_direction_color" id="light_turnon_direction_color">
            <value name="direction">
                <shadow type="light_turnon_direction_menu">
                </shadow>
            </value>
            <value name="color">
                <shadow type="light_turnon_color_menu">
                </shadow>
            </value>
        </block>
        <block type="light_turnon_floor_lights" id="light_turnon_floor_lights">
        </block>
        <block type="light_turnoff_direction_lights" id="light_turnoff_direction_lights">
            <value name="direction">
                <shadow type="light_turnon_direction_menu">
                </shadow>
            </value>
        </block>
         <block type="light_turnon_type_lights" id="light_turnon_type_lights">
            <value name="type">
                <shadow type="light_type_menu">
                </shadow>
            </value>
        </block>
    </category>
    `;
};
//

// fun move
const funMove = function (isInitialSetup, isStage, targetId, colors) {
    // Note: the category's secondaryColour matches up with the blocks' tertiary color, both used for border color.
    return `
    <category name="%{BKY_CATEGORY_FUN_MOVE}" id="fun_move" colour="${colors.primary}" secondaryColour="${colors.tertiary}">
        <block type="fun_move" id="fun_move">
            <value name="type">
                <shadow type="fun_move_menu">
                </shadow>
            </value>
        </block>
    </category>
    `;
};

// sensor
const sensor = function (isInitialSetup, isStage, targetId, colors) {
    // Note: the category's secondaryColour matches up with the blocks' tertiary color, both used for border color.
    return `
    <category name="%{BKY_CATEGORY_SENSOR}" id="sensor" colour="${colors.primary}" secondaryColour="${colors.tertiary}">
        <block type="sensor_floor_color" id="sensor_floor_color">
            <value name="color">
                <shadow type="sensor_color_menu">
                </shadow>
            </value>
        </block>
        <block type="sensor_obstacle_detected" id="sensor_obstacle_detected">
            <value name="obstacle">
                <shadow type="sensor_obstacle_menu">
                </shadow>
            </value>
        </block>
         <block type="sensor_robico" id="sensor_robico">
            <value name="type">
                <shadow type="sensor_type_menu">
                </shadow>
            </value>
        </block>
    </category>
    `;
};

const sound = function (isInitialSetup, isStage, targetId, soundName, colors) {
    // Note: the category's secondaryColour matches up with the blocks' tertiary color, both used for border color.
    return `
        <category name="%{BKY_CATEGORY_SOUND}" id="sound" colour="${colors.primary}" secondaryColour="${colors.tertiary}">
            <block type="sound_say_number" id="sound_say_number">
                <value name="sound">
                    <shadow type="sound_numbers_menu">
                    </shadow>
                </value>
            </block>
            <block type="sound_say_color" id="sound_say_color">
                <value name="sound">
                    <shadow type="sound_colors_menu">
                    </shadow>
                </value>
            </block>
            <block type="sound_play_vehicle" id="sound_play_vehicle">
                <value name="sound">
                    <shadow type="sound_vehicles_menu">
                    </shadow>
                </value>
            </block>
            <block type="sound_play_animal" id="sound_play_animal">
                <value name="sound">
                    <shadow type="sound_animals_menu">
                    </shadow>
                </value>
            </block>
            <block type="sound_play_express" id="sound_play_express">
                <value name="sound">
                    <shadow type="sound_express_menu">
                    </shadow>
                </value>
            </block>
            <block type="sound_say_sounds" id="sound_say_sounds">
                <value name="sound">
                    <shadow type="sound_sounds_menu">
                    </shadow>
                </value>
            </block>
            <block type="sound_say_announce" id="sound_say_announce">
                <value name="sound">
                    <shadow type="sound_announces_menu">
                    </shadow>
                </value>
            </block>
            <block type="sound_play_note" id="sound_play_note">
                <value name="sound">
                    <shadow type="sound_charecters_menu">
                    </shadow>
                </value>
                <value name="sound_type">
                    <shadow type="sound_type_menu">
                    </shadow>
                </value>
                <value name="duration">
                    <shadow type="text">
                        <field name="TEXT"></field>
                    </shadow>
                </value>
            </block>
            <block type="sound_play_floor_color" id="sound_play_floor_color">
            </block>
            <block type="sound_play_recorded" id="sound_play_recorded">
            </block>
        </category>
    `;
};

const events = function (isInitialSetup, isStage, targetId, colors) {
    // Note: the category's secondaryColour matches up with the blocks' tertiary color, both used for border color.
    return `
    <category name="%{BKY_CATEGORY_EVENTS}" id="events" colour="${colors.primary}" secondaryColour="${colors.tertiary}">
        <block type="event_whenflagclicked"/>
        <block type="event_whenkeypressed">
        </block>
        ${isStage ? `
            <block type="event_whenstageclicked"/>
        ` : `
            <block type="event_whenthisspriteclicked"/>
        `}
        <block type="event_whenbackdropswitchesto">
        </block>
        ${blockSeparator}
        <block type="event_whengreaterthan">
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="event_whenbroadcastreceived">
        </block>
        <block type="event_broadcast">
            <value name="BROADCAST_INPUT">
                <shadow type="event_broadcast_menu"></shadow>
            </value>
        </block>
        <block type="event_broadcastandwait">
            <value name="BROADCAST_INPUT">
              <shadow type="event_broadcast_menu"></shadow>
            </value>
        </block>
        ${categorySeparator}
    </category>
    `;
};

const xmlOpen = '<xml style="display: none">';
const xmlClose = '</xml>';

/**
 * @param {!boolean} isInitialSetup - Whether the toolbox is for initial setup. If the mode is "initial setup",
 * blocks with localized default parameters (e.g. ask and wait) should not be loaded. (LLK/scratch-gui#5445)
 * @param {?boolean} isStage - Whether the toolbox is for a stage-type target. This is always set to true
 * when isInitialSetup is true.
 * @param {?string} targetId - The current editing target
 * @param {?Array.<object>} categoriesXML - optional array of `{id,xml}` for categories. This can include both core
 * and other extensions: core extensions will be placed in the normal Scratch order; others will go at the bottom.
 * @property {string} id - the extension / category ID.
 * @property {string} xml - the `<category>...</category>` XML for this extension / category.
 * @param {?string} costumeName - The name of the default selected costume dropdown.
 * @param {?string} backdropName - The name of the default selected backdrop dropdown.
 * @param {?string} soundName -  The name of the default selected sound dropdown.
 * @param {?object} colors - The colors for the theme.
 * @returns {string} - a ScratchBlocks-style XML document for the contents of the toolbox.
 */
const makeToolboxXML = function (isInitialSetup, isStage = true, targetId, categoriesXML = [],
    costumeName = '', backdropName = '', soundName = '', colors = defaultColors) {
    isStage = isInitialSetup || isStage;
    const gap = [categorySeparator];

    costumeName = xmlEscape(costumeName);
    backdropName = xmlEscape(backdropName);
    soundName = xmlEscape(soundName);

    categoriesXML = categoriesXML.slice();
    const moveCategory = categoryId => {
        const index = categoriesXML.findIndex(categoryInfo => categoryInfo.id === categoryId);
        if (index >= 0) {
            // remove the category from categoriesXML and return its XML
            const [categoryInfo] = categoriesXML.splice(index, 1);
            return categoryInfo.xml;
        }
        // return `undefined`
    };
    const motionXML = moveCategory('motion') || motion(isInitialSetup, isStage, targetId, colors.motion);
    const lineTracingXML = moveCategory('lineTracing') || lineTracing(isInitialSetup, isStage, targetId, colors.line_tracing);
    const lightXML = moveCategory('light') || light(isInitialSetup, isStage, targetId, colors.light);
    const soundXML = moveCategory('sound') || sound(isInitialSetup, isStage, targetId, soundName, colors.sounds);
    const eventsXML = moveCategory('event') || events(isInitialSetup, isStage, targetId, colors.event);
    const funMoveXML = moveCategory('funMove') || funMove(isInitialSetup, isStage, targetId, colors.fun_move);
    const sensorXML = moveCategory('sensor') || sensor(isInitialSetup, isStage, targetId, colors.sensor);

    const everything = [
        xmlOpen,
        eventsXML, gap,
        motionXML, gap,
        lineTracingXML, gap,
        lightXML, gap,
        soundXML, gap,
        funMoveXML, gap,
        sensorXML, gap
    ];

    for (const extensionCategory of categoriesXML) {
        everything.push(gap, extensionCategory.xml);
    }

    everything.push(xmlClose);
    return everything.join('\n');
};

export default makeToolboxXML;
