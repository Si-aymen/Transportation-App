package org.example.courzelo.services;

import org.example.courzelo.models.Transports;

import java.util.List;

public interface ITransportsService {

    public List<Transports> retrieveAllTransports();

    public Transports retrieveTransport(String TransportsId);

    public Transports addTransports(Transports transports);

    public void removeTransports(String tansportsId);

    public Transports modifyTransports(Transports transports);

    public  Long GetNumberOfTransports();
    public  List<Transports> searchTransports(String transportsName);
    public void affectUserToTransports(String userID, String transportsId);
}
