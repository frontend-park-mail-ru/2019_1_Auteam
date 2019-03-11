(function() {
  const noop = () => null;

  const getBasePath = () => {
    if (window.location.hostname === 'dev.mycodestory.ru') {
      return '//back.dev.mycodestory.ru';
    }
    return '';
  };
  const basePath = getBasePath();

  /** class performing Ajax requests. */
  class AjaxModule {
    /**
     * Ajax request.
     * @param {function} callback
     * @param {string} method - GET/POST method.
     * @param {string} path - URL path.
     * @param {Object} body - context object.
     */
    _ajax({
      callback = noop,
      method = 'GET',
      path = '/',
      body = {},
    } = {}) {
      const xhr = new XMLHttpRequest();
      xhr.open(method, `${basePath}${path}`, true);
      xhr.withCredentials = true;

      if (body) {
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
      }

      xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) {
          return;
        }

        callback(xhr);
      };

      if (body) {
        xhr.send(JSON.stringify(body));
      } else {
        xhr.send();
      }
    }

    /**
     * GET request.
     * @param {Object} - Object like _ajax({}) param.
     */
    doGet({    /**
     * GET request.
     * @param {Object} - Object like _ajax({}) param.
     */

      callback = noop,
      path = '/',
      body = {},
    } = {}) {
      this._ajax({
        callback,
        path,
        body,
        method: 'GET',
      });
    }

    /**
     * POST request.
     * @param {Object} - Object like _ajax({}) param.
     */
    doPost({
      callback = noop,
      path = '/',
      body = {},
    } = {}) {
      this._ajax({
        callback,
        path,
        body,
        method: 'POST',
      });
    }
  }

  window.AjaxModule = new AjaxModule();
})();
