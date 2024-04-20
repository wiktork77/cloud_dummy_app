FROM busybox:1.35
ARG ip
RUN adduser -D stud
USER stud
WORKDIR /home/stud

COPY src/ .
RUN sed -i "s/<INSTANCE_IP>/$ip/g" js/socket_js.js
ENTRYPOINT ["busybox"]
CMD ["httpd", "-f", "-v", "-p", "3000"]