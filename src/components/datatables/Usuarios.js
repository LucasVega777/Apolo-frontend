import React, { useState, useEffect } from 'react';

function Proyectos() {
  

  return (
        <div class="user-data m-b-40">
            <h3 class="title-3 m-b-30">
                <i class="zmdi zmdi-account-calendar"></i>Usuarios</h3>
            <div class="filters m-b-45">
                <div class="rs-select2--dark rs-select2--md m-r-10 rs-select2--border">
                    <select class="js-select2" name="property">
                        <option selected="selected">Filtro rol</option>
                        <option value="">Admin</option>
                        <option value="">Scrum Master</option>
                        <option value="">Desarrollador</option>
                        <option value="">Usuario</option>
                    </select>
                    <div class="dropDownSelect2"></div>
                </div>
                <div class="rs-select2--dark rs-select2--sm rs-select2--border">
                    <select class="js-select2 au-select-dark" name="time">
                        <option selected="selected">Ordenar por</option>
                        <option value="">Fecha de Insercion</option>
                        <option value="">Nombre</option>
                    </select>
                    <div class="dropDownSelect2"></div>
                </div>
            </div>
            <div class="table-responsive table-data">
                <table class="table">
                    <thead>
                        <tr>
                            <td>
                                <label class="au-checkbox">
                                    <input type="checkbox"/>
                                    <span class="au-checkmark"></span>
                                </label>
                            </td>
                            <td>usuario</td>
                            <td>rol</td>
                            <td>tipo</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label class="au-checkbox">
                                    <input type="checkbox"/>
                                    <span class="au-checkmark"></span>
                                </label>
                            </td>
                            <td>
                                <div class="table-data__info">
                                    <h6>Lucas Vega</h6>
                                    <span>
                                        <a href="#">lucasmvegap@gmail.com</a>
                                    </span>
                                </div>
                            </td>
                            <td>
                                <span class="role admin">admin</span>
                            </td>
                            <td>
                                <div class="rs-select2--trans rs-select2--sm">
                                    <select class="js-select2" name="property">
                                        <option selected="selected">Control Total</option>
                                        <option value="">Escritura</option>
                                        <option value="">Lectura</option>
                                    </select>
                                    <div class="dropDownSelect2"></div>
                                </div>
                            </td>
                            <td>
                                <span class="more">
                                    <i class="zmdi zmdi-more"></i>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="au-checkbox">
                                    <input type="checkbox" checked="checked"/>
                                    <span class="au-checkmark"></span>
                                </label>
                            </td>
                            <td>
                                <div class="table-data__info">
                                    <h6>Veronica Dominguez</h6>
                                    <span>
                                        <a href="#">vero@gmail.com</a>
                                    </span>
                                </div>
                            </td>
                            <td>
                                <span class="role user">Desarrollador</span>
                            </td>
                            <td>
                                <div class="rs-select2--trans rs-select2--sm">
                                    <select class="js-select2" name="property">
                                        <option value="">Control Total</option>
                                        <option value="" selected="selected">Escritura</option>
                                        <option value="">Lectura</option>
                                    </select>
                                    <div class="dropDownSelect2"></div>
                                </div>
                            </td>
                            <td>
                                <span class="more">
                                    <i class="zmdi zmdi-more"></i>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="au-checkbox">
                                    <input type="checkbox"/>
                                    <span class="au-checkmark"></span>
                                </label>
                            </td>
                            <td>
                                <div class="table-data__info">
                                    <h6>Eduardo Gomez</h6>
                                    <span>
                                        <a href="#">edu@gmail.com</a>
                                    </span>
                                </div>
                            </td>
                            <td>
                                <span class="role user">Desarrollador</span>
                            </td>
                            <td>
                                <div class="rs-select2--trans rs-select2--sm">
                                    <select class="js-select2" name="property">
                                        <option value="">Control total</option>
                                        <option value="" selected="selected">Escritura</option>
                                        <option value="">Lectura</option>
                                    </select>
                                    <div class="dropDownSelect2"></div>
                                </div>
                            </td>
                            <td>
                                <span class="more">
                                    <i class="zmdi zmdi-more"></i>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="au-checkbox">
                                    <input type="checkbox"/>
                                    <span class="au-checkmark"></span>
                                </label>
                            </td>
                            <td>
                                <div class="table-data__info">
                                    <h6>alex amarilla</h6>
                                    <span>
                                        <a href="#">alex@gmail.com</a>
                                    </span>
                                </div>
                            </td>
                            <td>
                                <span class="role member">Usuario</span>
                            </td>
                            <td>
                                <div class="rs-select2--trans rs-select2--sm">
                                    <select class="js-select2" name="property">
                                        <option selected="selected">Control Total</option>
                                        <option value="">Escritura</option>
                                        <option value="">Lectura</option>
                                    </select>
                                    <div class="dropDownSelect2"></div>
                                </div>
                            </td>
                            <td>
                                <span class="more">
                                    <i class="zmdi zmdi-more"></i>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="user-data__footer">
                <button class="au-btn au-btn-load">cargar mas</button>
            </div>
        </div>
  );
}

export default Proyectos;