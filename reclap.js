reclap = (function(){
  var public = {}

  public.getState = function(){
    var state = window.location.hash
    if( state[0] == '#' )
      state = state.slice( 1 );
    return state
  }

  return public
})()
