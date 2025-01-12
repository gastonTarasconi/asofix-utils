/**
 * Obtiene la fecha y hora en UTC en la zona horaria especificada
 * @param {string} dateToFormat - Fecha a formatear en formato 'YYYY-MM-DD HH:mm:ss'
 * @param {string} timezoneUser - La timezone a aplicar a la fecha.
 * @return {string} La fecha formateada en 'DD-MM-YYYY HH:mm:ss' para la timezone especificada.
 * @example
 * const dateToFormat = '2000-05-30 10:00:00';
 * const timezoneUser = 'Europe/Paris';
 * const formattedDate = formatDateWithTimezone(dateToFormat, timezoneUser);
 * console.log(formattedDate);
 * // Salida: '30-05-2000 12:00:00'
 */
export declare const formatDateWithTimezone: (dateToFormat: string, timezoneUser: string) => string;
//# sourceMappingURL=dates.d.ts.map