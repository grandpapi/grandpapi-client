import sessionReducer from './sessionReducer';
import { SET_SESSION, CHECK_SESSION, NAVIGATE_DASHBOARD, NAVIGATE_DATABASE } from '../actions/sessionActions';
import { CREATE_DB, UPDATE_DB_STATE } from '../actions/dbActions';
import { CREATE_MODEL, UPDATE_MDL_STATE } from '../actions/modelActions';
import { CREATE_DATA } from '../actions/dataActions';

jest.mock('../services/auth.js', () => ({
  handleAuth() {
    return Promise.resolve([]);
  },
  handleCheck() {
    return Promise.resolve([]);
  }
}));

jest.mock('../services/dbMegaNapAPI.js', () => ({
  postDb() {
    return Promise.resolve([]);
  },
  getDbs() {
    return Promise.resolve([]);
  }
}));

jest.mock('../services/modelMegaNapAPI.js', () => ({
  postModel() {
    return Promise.resolve([]);
  },
  getModels() {
    return Promise.resolve([]);
  },
  getAllModels() {
    return Promise.resolve([]);
  }
}));

jest.mock('../services/dataMegaNapAPI.js', () => ({
  postData() {
    return Promise.resolve([]);
  }
}));

describe('session reducer reducer tests', () => {

  const initialState = {
    username: '',
    token: '',
    currentDatabase: {
      dbName: '',
      dbId: '',
      username: ''
    },
    currentModel: {
      mdlName: '',
      mdlId: '',
      mdlSchema: '{}'
    },
    currentData: {
      dataId: ''
    }
  };

  it('can handle a set session action', () => {
    expect(sessionReducer(initialState, {
      type: SET_SESSION,
      payload: {
        nickname: 'test username',
        token: 'test token',
      }
    })).toEqual({
      username: '',
      token: 'test token',
      currentDatabase: {
        dbName: '',
        dbId: '',
        username: ''
      },
      currentModel: {
        mdlName: '',
        mdlId: '',
        mdlSchema: '{}'
      },
      currentData: {
        dataId: ''
      },
      nickname: 'test username'
    });
  });
  
  it('can handle a check session action', () => {
    expect(sessionReducer(initialState, {
      type: CHECK_SESSION,
      payload: {
        nickname: 'test username',
        token: 'test token',
      }
    })).toEqual({
      username: '',
      token: 'test token',
      currentDatabase: {
        dbName: '',
        dbId: '',
        username: ''
      },
      currentModel: {
        mdlName: '',
        mdlId: '',
        mdlSchema: '{}'
      },
      currentData: {
        dataId: ''
      },
      nickname: 'test username'
    });
  });
  
  it('can handle a create db action', () => {
    expect(sessionReducer(initialState, {
      type: CREATE_DB,
      payload: {
        dbName: 'test db',
        _id: 'test id',
        username: 'test username'
      }
    })).toEqual({
      username: '',
      token: '',
      currentDatabase: {
        dbName: 'test db',
        dbId: 'test id',
        username: 'test username'
      },
      currentModel: {
        mdlName: '',
        mdlId: '',
        mdlSchema: '{}'
      },
      currentData: {
        dataId: ''
      }
    });
  });
  
  it('can handle a create model action', () => {
    expect(sessionReducer(initialState, {
      type: CREATE_MODEL,
      payload: {
        mdlName: 'test mdl',
        _id: 'test id',
        mdlSchema: '{test schema}'
      }
    })).toEqual({
      username: '',
      token: '',
      currentDatabase: {
        dbName: '',
        dbId: '',
        username: ''
      },
      currentModel: {
        mdlName: 'test mdl',
        mdlId: 'test id',
        mdlSchema: '{test schema}'
      },
      currentData: {
        dataId: ''
      }
    });
  });
  
  it('can handle a create data action', () => {
    expect(sessionReducer(initialState, {
      type: CREATE_DATA,
      payload: {
        _id: 'test id',
      }
    })).toEqual({
      username: '',
      token: '',
      currentDatabase: {
        dbName: '',
        dbId: '',
        username: ''
      },
      currentModel: {
        mdlName: '',
        mdlId: '',
        mdlSchema: '{}'
      },
      currentData: {
        dataId: 'test id'
      }
    });
  });
  
  it('can handle an update db action', () => {
    expect(sessionReducer({ 
      ...initialState,
      currentModel: {
        mdlName: 'test name',
        mdlId: 'test id',
        mdlSchema: '{test schema}'
      }
    }, {
      type: UPDATE_DB_STATE,
      payload: {
        dbName: 'test db',
        dbId: 'test id',
        username: 'test username'
      }
    })).toEqual({
      username: '',
      token: '',
      currentDatabase: {
        dbName: 'test db',
        dbId: 'test id',
        username: 'test username'
      },
      currentModel: {
        mdlName: '',
        mdlId: '',
        mdlSchema: '{}'
      },
      currentData: {
        dataId: ''
      }
    });
  });

  it('can handle an update model action', () => {
    expect(sessionReducer(initialState, {
      type: UPDATE_MDL_STATE,
      payload: {
        mdlName: 'test mdl',
        mdlId: 'test id',
        mdlSchema: '{test schema}'
      }
    })).toEqual({
      username: '',
      token: '',
      currentDatabase: {
        dbName: '',
        dbId: '',
        username: ''
      },
      currentModel: {
        mdlName: 'test mdl',
        mdlId: 'test id',
        mdlSchema: '{test schema}'
      },
      currentData: {
        dataId: ''
      }
    });
  });

  it('can handle a nav dashboard action', () => {
    expect(sessionReducer({ 
      ...initialState,
      currentDatabase: {
        dbName: 'test name',
        dbId: 'test id',
        username: 'test username'
      },
      currentModel: {
        mdlName: 'test name',
        mdlId: 'test id',
        mdlSchema: '{test schema}'
      }
    }, {
      type: NAVIGATE_DASHBOARD,
    })).toEqual({
      username: '',
      token: '',
      currentDatabase: {
        dbName: '',
        dbId: '',
        username: ''
      },
      currentModel: {
        mdlName: '',
        mdlId: '',
        mdlSchema: '{}'
      },
      currentData: {
        dataId: ''
      }
    });
  });
  
  it('can handle a nav db action', () => {
    expect(sessionReducer({ 
      ...initialState,
      currentDatabase: {
        dbName: 'test name',
        dbId: 'test id',
        username: 'test username'
      },
      currentModel: {
        mdlName: 'test name',
        mdlId: 'test id',
        mdlSchema: '{test schema}'
      }
    }, {
      type: NAVIGATE_DATABASE,
    })).toEqual({
      username: '',
      token: '',
      currentDatabase: {
        dbName: 'test name',
        dbId: 'test id',
        username: 'test username'
      },
      currentModel: {
        mdlName: '',
        mdlId: '',
        mdlSchema: '{}'
      },
      currentData: {
        dataId: ''
      }
    });
  });
});
