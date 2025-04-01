



export const types = {
    login: `[auth], login`,
    logout: `[auth], logout`,
    logged: false,

    // types para el estado de autenticación 
    authCheckingFinish: '[auth] Finish checking login state',
    authLogin: '[auth] Start login',
    authStartRegister: '[auth] Start register',
    authStartTokenRenew: '[auth] Start token renew',
    authLogout: '[auth] Logout',
    
    // types para el estado de autenticación admin
    authAdminCheckingFinish: '[auth] Finish checking admin login state',
    authAdminStartRegister: '[auth] Start register',
    authAdminLogin: '[auth] admin login active',
    authAdminLogout: '[auth] admin logout',

    // types para el estado de autenticación asesores
    advisorCheckingFinish: '[auth] Finish checking login state',
    advisorLogin: '[auth] Start login',
    advisorStartRegister: '[auth] Start register',
    advisorStartTokenRenew: '[auth] Start token renew',
    advisorLogout: '[auth] Logout',
        

    // types para el estado de productos
    propertyView: `[looking], looking start`,
    propertyViewed: `[viewed], viewed out`,
    STORAGED_PROPERTY: `[storaged], storaged`,
    SELECTED_PROPERTY: `[selected], product selected`,
    REMOVE_PROPERTY: `[remove], deleted`,
    UPDATE_PROPERTY: `[update], Updated`,
    propertyViewedFinish: `[finish], viewed finish`,

    CHANGE_LANG: 'CHANGE_LANG',

    // types para el estado del carrito
    ADD_TO_CART: 'Adding to cart',
    REMOVE_FROM_CART: 'Removed to cart success',
    CLEAR_CART: 'Clear cart success',
    ADD_TO_CART_SUCCESS: 'Added to cart success',
    ADD_TO_CART_FAIL: 'ADD_TO_CART_FAIL',
    MOVE_FROM_WISHLIST_TO_CART: 'Move to wishlist success',

    // types para el estado de la lista de deseos
    ADD_TO_WISHLIST: 'ADD_TO_WISHLIST',
    MOVE_FROM_CART_TO_WISHLIST: 'Move to wishlist success',
    REMOVE_FROM_WISHLIST: 'REMOVE_FROM_WISHLIST',
    CLEAR_WISHLIST: 'Clear whislist success',
    ADD_TO_WISHLIST_SUCCESS: 'ADD_TO_WISHLIST_SUCCESS',
    ADD_TO_WISHLIST_FAIL: 'ADD_TO_WISHLIST_FAIL',
    
    // types para el estado de las calificaciones
    SET_RATINGS: 'ratings on'
}

export const SOCKET_UPDATE_PROPERTIES = 'SOCKET_UPDATE_PROPERTIES';