import React from 'react'

export interface IconProps extends React.HTMLAttributes<SVGElement> {
  name: IconNames
  size?: keyof typeof Sizes
  flip?: boolean
  baseColour?: boolean
}

export enum Sizes {
  xxs,
  xs,
  sm,
  md,
  lg,
  xl,
  full,
}

export interface BaseIconProps extends IconProps {
  G81Type?: G81IconType
  type?: IconType
}

export enum IconType {
  DEFAULT = 'default',
  LARGE = 'large',
}

export enum G81IconType {
  FILE_CAD = 'file_cad',
  FILE_DOC = 'file_doc',
  FILE_DOCX = 'file_docx',
  FILE_PDF = 'file_pdf',
  FILE_SWG = 'file_swg',
  FILE_UNKWOWN = 'file_unknown',
  FILE_XLS = 'file_xls',
  FILE_XLSX = 'file_xlsx',
  FILE_VIEW_DOCUMENT = 'file_view_document',
}

export enum IconNames {
  FORTY_PX_ADVICE = '40px_advice',
  FORTY_PX_CALL = '40px_call',
  FORTY_PX_ESTIMATOR = '40px_estimator',
  FORTY_PX_FACEBOOK = '40px_facebook',
  FORTY_PX_LOCATION = '40px_location',
  FORTY_PX_MAINTENANCE = '40px_maintenance',
  FORTY_PX_MOBILE = '40px_mobile',
  FORTY_PX_MOBILE_SOCIAL = '40px_mobile_social',
  FORTY_PX_NOT_FOUND = '40px_not_found',
  FORTY_PX_PERSON = '40px_person',
  FORTY_PX_POWER = '40px_power',
  FORTY_PX_POWER_CUT = '40px_power_cut',
  FORTY_PX_POWER_ON = '40px_power_on',
  FORTY_PX_SEARCH = '40px_search',
  FORTY_PX_TWITTER = '40px_twitter',
  FORTY_PX_VAN = '40px_van',
  FORTY_PX_WARNING = '40px_warning',
  FORTY_PX_WEATHER = '40px_weather',
  EIGHTY_PX_ADVICE = '80px_advice',
  EIGHTY_PX_CALL = '80px_call',
  EIGHTY_PX_CONNECTIONS = '80px_connections',
  EIGHTY_PX_ESTIMATOR = '80px_estimator',
  EIGHTY_PX_MAINTENANCE = '80px_maintenance',
  EIGHTY_PX_MOBILE = '80px_mobile',
  EIGHTY_PX_RINGS = '80px_rings',
  ANIMATION = 'animation',
  ARROW_ICON = 'arrow-icon',
  ARROW_SMALL_WHITE = 'arrow-small-white',
  CARET_DOWN = 'caret-down',
  CIRCLE_LRG = 'circle_lrg',
  CIRCLE_SML = 'circle_sml',
  CROSS_INVERSE = 'cross-inverse',
  CROSS = 'cross',
  CTA_ARROW_DOWN = 'cta_arrow_down',
  CTA_ARROW_LONG = 'cta_arrow_long',
  CTA_ARROW_SHORT = 'cta_arrow_short',
  CTA_EXPAND = 'cta_expand',
  CTA_BURGER = 'cta_burger',
  CTA_CLOSE_ONE = 'cta_close_1',
  CTA_CLOSE_TWO = 'cta_close_2',
  CTA_COLLAPSE = 'cta_collapse',
  CTA_DOWN_ARROW = 'cta_down_arrow',
  CTA_EMAIL = 'cta_email',
  EXPAND = 'expand',
  CTA_SEARCH = 'cta_search',
  DOWN_CHEVRON = 'down-chevron',
  LEFT_CHEVRON = 'left-chevron',
  ICO_SMALL_BIG = 'ico-email-big',
  ICO_LIVE_CHAT = 'ico-live-chat',
  ICO_QUESTION_BLUE = 'ico-question-blue',
  ICO_QUESTION = 'ico-question',
  ICO_TIMER = 'ico-timer',
  ICO_APPLY = 'ico_apply',
  ICO_MAINTENANCE_ONE = 'ico_maintenance_1',
  ICO_BACK_TO_TOP = 'ico_back_to_top',
  ICO_CALENDAR = 'ico_calendar',
  ICO_CHAT_ONE = 'ico_chat_1',
  ICO_CHAT_TWO = 'ico_chat_2',
  ICO_CHECK_ONE = 'ico_check_1',
  ICO_CHECK_TWO = 'ico_check_2',
  ICO_CHECK_THREE = 'ico_check_3',
  ICO_CLOSE = 'ico_close',
  ICO_CLOSE_SMALL = 'ico_close_sml',
  ICO_COLLAPSE = 'ico_collapse',
  ICO_CONNECTION = 'ico_connection',
  ICO_DOWNLOAD = 'ico_download',
  ICO_EMAIL = 'ico_email',
  ICO_EMAIL_BIG = 'ico-email-big',
  ICO_EXPAND = 'ico_expand',
  ICO_GLOBAL = 'ico_global',
  ICO_GREEN_OVEL_TICK = 'ico_green_ovel_tick',
  ICO_HELP_BLUE = 'ico_help_blue',
  ICO_INVALID_INPUT = 'ico_invalid_input',
  ICO_INVALID_INPUT_WHITE = 'ico_invalid_input_white',
  ICO_LIST = 'ico_list',
  ICO_MAINTENANCE = 'ico_maintanence',
  ICO_MARKER = 'ico_marker',
  ICO_MEDICAL = 'ico_medical',
  ICO_MEDICAL_TWO = 'ico_medical_2',
  ICO_POWER_ONE = 'ico_power_1',
  ICO_POWER_TWO = 'ico_power_2',
  ICO_POWER_CABLES = 'ico_power_cables',
  ICO_POWER_CUT = 'ico_power_cut',
  ICO_STAIR_LIFT = 'ico_stair_lift',
  ICO_NEWS_PRESS = 'ico_news_press',
  ICO_TARGET = 'ico_target',
  ICO_TOP_NOTCH = 'ico_top_notch',
  ICO_TWITTER = 'ico_twitter',
  ICO_UPLOAD = 'ico_upload',
  ICO_VAN_ONE = 'ico_van_1',
  ICO_VAN_TWO = 'ico_van_2',
  ICO_VISIT = 'ico_visit',
  ICO_YOUTUBE_ONE = 'ico_youtube_1',
  ICO_YOUTUBE_TWO = 'ico_youtube_2',
  ICON_ADVICE = 'icon_advice',
  ICON_ADVICE_TWO = 'icon_advice_2',
  ICON_ALERT_CIRCLE = 'icon_alert_circle',
  ICON_APPLIANCE = 'icon_appliance',
  ICON_APPLY = 'icon_apply',
  ICON_ARROW_LONG_VERTICAL = 'icon_arrow_long_vertical',
  ICON_ARROW_LONG_HORIZONTAL = 'icon_arrow_long_horizontal',
  ICON_ARROW_DOWN = 'icon_arrow_down',
  ICON_ARROW_LONG = 'icon_arrow_long',
  ICON_ARROW_SHORT = 'icon_arrow_short',
  ICON_BATH_HOIST = 'icon_bath_hoist',
  ICON_BATTERY = 'icon_battery',
  ICON_BOILER = 'icon_boiler',
  ICON_BROKEN_FENCE = 'icon_broken_fence',
  ICON_BURGER = 'icon_burger',
  ICON_CALENDAR = 'icon_calendar',
  ICON_CALL = 'icon_call',
  ICON_CALL_TWENTYFOUR = 'icon_call_24',
  ICON_CHARGED = 'icon_charged',
  ICON_CHAT = 'icon_chat',
  ICON_CHECK_ONE = 'icon_check_1',
  ICON_CHECK_TWO = 'icon_check_2',
  ICON_CHEVRON_RIGHT = 'icon_chevron_right',
  ICON_CHIMNEY = 'icon_chimney',
  ICON_CLOSE_ONE = 'icon_close_1',
  ICON_CLOSE_TWO = 'icon_close_2',
  ICON_COLLAPSE = 'icon_collapse',
  ICON_COMPENSATION = 'icon_compensation',
  ICON_CONNECTED_POWER = 'icon_connected_power',
  ICON_CONNECTION = 'icon_connection',
  ICON_CONNECTIONS = 'icon_connections',
  ICON_COVERED_CABLE = 'icon_covered_cable',
  ICON_DAMAGED_METERBOX = 'icon_damaged_meterbox',
  ICON_DIGGER = 'icon_digger',
  ICON_DOWNLOAD = 'icon_download',
  ICON_DOWNLOAD_PDF = 'icon_download_pdf',
  ICON_SUBSCRIPTION = 'icon_subscription',
  ICON_UNSUBSCRIPTION = 'icon_unsubscription',
  ICON_EARTH_LOOP = 'icon_earth_loop',
  ICON_ELECTRIC_CAR = 'icon_electric_car',
  ICON_ELECTRICIAN = 'icon_electrician',
  ICON_EMAIL_BIG = 'icon_email_big',
  ICON_ESTIMATOR = 'icon_estimator',
  ICON_EXPAND = 'icon_expand',
  ICON_EXTENSION = 'icon_extension',
  ICON_FACEBOOK = 'icon_facebook',
  ICON_FACEBOOK_TWO = 'icon_facebook_2',
  ICON_FASCIA = 'icon_fascia',
  ICON_FIRE_DRILL = 'icon_fire_drill',
  ICON_FISH = 'icon_fish',
  ICON_FOOD_FRIDGE = 'icon_food_fridge',
  ICON_GENERATOR = 'icon_generator',
  ICON_GLOBAL = 'icon_global',
  ICON_HELPING_HAND = 'icon_helping_hand',
  ICON_HOME = 'icon_home',
  ICON_HOT_MEALS = 'icon_hot_meals',
  ICON_HOTEL = 'icon_hotel',
  ICON_HOUSE_LIGHT = 'icon_house_light',
  ICON_HOUSE_UNDERGROUND_CABLE = 'icon_house_underground_cable',
  ICON_INSTAGRAM = 'icon_instagram',
  ICON_INSTAGRAM_TWO = 'icon_instagram_2',
  ICON_INVALID_INPUT = 'icon_invalid_input',
  ICON_JACUZZI = 'icon_jacuzzi',
  ICON_LEANING_POLE = 'icon_leaning_pole',
  ICON_LINKEDIN = 'icon_linkedin',
  ICON_LINKEDIN_TWO = 'icon_linkedin_2',
  ICON_LIST = 'icon_list',
  ICON_LOCATION = 'icon_location',
  ICON_LOCATION_NOT_FOUND = 'icon_location_not_found',
  ICON_MAINTENANCE = 'icon_maintenance',
  ICON_MAP_READING = 'icon_map_reading',
  ICON_MARKETING_MESSAGE = 'icon_marketing_message',
  ICON_MEDICAL = 'icon_medical',
  ICON_MEDICAL_TWO = 'icon_medicaL_2',
  ICON_METERBOARD_ONE = 'icon_meterboard_1',
  ICON_METERBOARD_TWO = 'icon_meterboard_2',
  ICON_METERBOARD_WALL = 'icon_meterboard_wall',
  ICON_METERBOARD_WARNING = 'icon_meterboard_warning',
  ICON_METERBOX = 'icon_meterbox',
  ICON_MOBILE = 'icon_mobile',
  ICON_NOT_FOUND = 'icon_not_found',
  ICON_NUMBER_ONE = 'icon_number_1',
  ICON_NUMBER_TWO = 'icon_number_2',
  ICON_NUMBER_THREE = 'icon_number_3',
  ICON_PERSON = 'icon_person',
  ICON_PME = 'icon_pme',
  ICON_POLE_TO_POLE = 'icon_pole_to_pole',
  ICON_POWER_CABLES = 'icon_power_cables',
  ICON_POWER_CUT = 'icon_power_cut',
  ICON_POWER_ON = 'icon_power_on',
  ICON_POWER_ON_TWO = 'icon_power_on_2',
  ICON_POWERLINE_WARNING = 'icon_powerline_warning',
  ICON_PRIORITY = 'icon_priority',
  ICON_PROMOTION = 'icon_promotion',
  ICON_PSR = 'icon_psr',
  ICON_QUESTION = 'icon_question',
  ICON_QUOTE = 'icon_quote',
  ICON_RING_BACKGROUND = 'icon_ring_background',
  ICON_RING_BACKGROUND_TWO = 'icon_ring_background_2',
  ICON_RING_BACKGROUND_THREE = 'icon_ring_background_3',
  ICON_ROOF = 'icon_roof',
  ICON_SCAFFOLDING = 'icon_scaffolding',
  ICON_SEARCH = 'icon_search',
  ICON_SEARCH_CIRCLE = 'icon_search_circle',
  ICON_SERVICE_HEAD = 'icon_service_head',
  ICON_SHOWER = 'icon_shower',
  ICON_SOCKETS = 'icon_sockets',
  ICON_SOLAR_PANELS = 'icon_solar_panels',
  ICON_SPECIALIST_TEAM = 'icon_specialist_team',
  ICON_STAIR_LIFT = 'icon_stair_lift',
  ICON_STOP_TEXT = 'icon_stop_text',
  ICON_SUBSTATION = 'icon_substation',
  ICON_SUBSTATION_GRAFFITI = 'icon_substation_grafitti',
  ICON_TALL_BUILDING = 'icon_tall_building',
  ICON_TARGET = 'icon_target',
  ICON_TICK_CIRCLE = 'icon_tick_circle',
  ICON_TIMER = 'icon_timer',
  ICON_TOP_NOTCH = 'icon_top_notch',
  ICON_TREE_BUSH_POWERLINE = 'icon_tree_bush_powerline',
  ICON_TREE_CUTTING = 'icon_tree_cutting',
  ICON_TWITTER = 'icon_twitter',
  ICON_TWITTER_TWO = 'icon_twitter_2',
  ICON_UKPN_RINGS = 'icon_ukpn_rings',
  ICON_UKPN_RINGS_TWO = 'icon_ukpn_rings_2',
  ICON_UNCOVERED_CABLE = 'icon_uncovered_cable',
  ICON_UPDATES = 'icon_updates',
  ICON_UPLOAD = 'icon_upload',
  ICON_VAN = 'icon_van',
  ICON_VAN_ONE = 'icon_van_1',
  ICON_VAN_TWO = 'icon_van_2',
  ICON_VEHICLE_UNDER_CABLE = 'icon_vehicle_under_cable',
  ICON_VISIT = 'icon_visit',
  ICON_WARNING = 'icon_warning',
  ICON_WATER = 'icon_water',
  ICON_WEATHER = 'icon_weather',
  ICON_WINDOW = 'icon_window',
  ICON_YOUTUBE = 'icon_youtube',
  ICON_YOUTUBE_TWO = 'icon_youtube_2',
  ARROW_THIN = 'arrow-thin',
  LINK_ARROW = 'link-arrow',
  LOADER_INNER = 'loader-inner',
  LOADER_OUTER = 'loader-outer',
  OUTER_RINGS_DARKER_GREY = 'outer-rings-darker-grey',
  RING_BACKGROUND = 'ring-background',
  UKPN_RINGS = 'ukpn-rings',
  EYE_SHOW = 'eye-show',
  EYE_HIDE = 'eye-hide',
  ICON_SETTINGS = 'icon_settings',
  ICON_G81_FILE_CAD = 'icon_g81_file_cad',
  ICON_G81_FILE_DGN = 'icon_g81_file_dgn',
  ICON_G81_FILE_DOC = 'icon_g81_file_doc',
  ICON_G81_FILE_DOCX = 'icon_g81_file_docx',
  ICON_G81_FILE_PDF = 'icon_g81_file_pdf',
  ICON_G81_FILE_SWG = 'icon_g81_file_swg',
  ICON_G81_FILE_UNKWOWN = 'icon_g81_file_unknown',
  ICON_G81_FILE_XLS = 'icon_g81_file_xls',
  ICON_G81_FILE_XLSX = 'icon_g81_file_xlsx',
  ICON_G81_FILE_SUBSCRIBE = 'icon_g81_subscribe',
  ICON_G81_FILE_SUBSCRIBED = 'icon_g81_subscribed',
  ICON_G81_VIEW_DOCUMENT = 'icon_g81_view_document',
  ICON_G81_DOWNLOAD = 'icon_g81_download',
  YOUTUBE = 'youtube',
  ICON_VIDEO = 'icon_video',
  MULTIPIN_STATUS = 'multipin_status',
  WARNING_ICON = 'warning_icon',
  TEXT_UPDATES = 'text_updates',
  FORTY_PX_SUCCESS = '40px_success',
  HUNDREAD_FOuRTEEN_SUCCESS = '114px_success',
  WHATSAPP = 'whatsapp',
  TELEPHONE = 'telephone',
  LEFT_ARROW = 'left-arrow',
  LOCATION = 'location',
  BOOKMARK = 'bookmark',
  LINK = 'link',
  UP_ARROW = 'up-arrow',
  FILTER = 'filter',
  DOWNLOAD = 'download',
  PROPERTY = 'property',
  CONTACT_DETAILS = 'contact-details',
  CHECKBOX_CHECKED = 'checkbox-checked',
  CHECKBOX_UNCHECKED = 'checkbox-unchecked',
  PLANNED_PC = 'planned-pc',
  EV_CHARGING = 'ev-charging',
  FEEDBACK = 'feedback',
  SHARE_LG = 'share-lg',
  LIST_VIEW = 'list-view',
  STREET_FURNITURE = 'street-furniture',
  CARBON = 'carbon',
  LITTER = 'litter',
  LAND_RIGHTS = 'land-rights',
  CIRCLED_LEFT_ARROW = 'circled-left-arrow',
  CIRCLED_MORE = 'circled-more',
  SAFETY = 'safety',
  INSTALL = 'install',
  SUPPLIER = 'supplier',
  MOVE = 'move',
  MPAN = 'mpan',
  GUIDE = 'guide',
  WEB = 'web',
  MORE = 'more',
  INFORMATION = 'information',
  REDIRECT = 'redirect',
  TIME = 'time',
  SHARE = 'share',
  MINUS = 'minus',
  TICK = 'tick',
  PLUS = 'plus',
  PIN = 'pin',
  TORCH = 'torch',
  PLAY = 'play',
  ARROW_HEAD = 'ArrowHead',
  CIRCLED_SMALL_ARROW = 'CircledSmallArrow',
}